import { v4 as uuid } from "uuid";
import { UPDATE_TYPE_CREDIT, UPDATE_TYPE_CASH } from "../consts.js";
import {
    loadJson,
    getUsersAndAccountsJson,
    saveToJson,
} from "../utils/jsonUtils.js";
import {
    updateAccounts,
    getRequestedAccount,
    checkAccountExistOrThrow,
} from "../utils/accountUtils.js";
import { User } from "../models/user/User.models.js";
import { Account } from "../models/account/Account.models.js";
import mongoose from "mongoose";

export const getUserData = async (id) => {
    const requestedUser = await User.findById(id);
    if (!requestedUser) return null;
    const userAccountsData = requestedUser.accounts.map((accountId) => {
        return Account.findById(accountId);
    });
    const userData = {
        userId: requestedUser.id,
        userName: requestedUser.name,
        accounts: userAccountsData,
    };

    return userData;
};

export const getAllUsers = async () => {
    const users = await User.find();

    return users.map(async (user) => await getUserData(user.id));
};

const createNewAccount = (newUserId) => {
    console.log(newUserId);
    return {
        cash: 0,
        credit: 0,
        isActive: true,
        permittedUsers: [newUserId],
    };
};

export const addNewUser = async ({ name }) => {
    const newUser = new User({
        name: name,
    });
    const newAccount = new Account(createNewAccount(newUser._id));
    newUser.accounts.push(newAccount._id);
    const savedAccount = await newAccount.save();
    // const updateUserAccount = await User.findByIdAndUpdate(
    //     { _id: savedUser["_id"] },
    //     { accounts: [savedAccount["_id"]] },
    //     { new: true }
    // );
    const savedUser = await newUser.save();
    return { savedUser, savedAccount };
};

export const depositCash = ({ accountId, amount }, userId) => {
    const { id } = getRequestedAccount(userId, accountId);
    const newAccountsArr = updateAccounts(id, amount);
    saveToJson("accounts.json", newAccountsArr);
};

const getMoneyAmount = (accountId, fromWhereToWithdraw) => {
    const accounts = loadJson("accounts.json");
    const accountData = accounts.find((account) => account.id === accountId);

    return accountData[fromWhereToWithdraw];
};

export const withdrawMoney = (
    { accountId, amount },
    userId,
    fromWhereToWithdraw
) => {
    const { id } = getRequestedAccount(userId, accountId);
    checkUserBalanceOrThrow(id, fromWhereToWithdraw, amount);
    const newAccountsArr = updateAccounts(id, amount * -1, fromWhereToWithdraw);
    saveToJson("accounts.json", newAccountsArr);
};

export const updateCredit = ({ accountId, amount }, userId) => {
    const { id } = getRequestedAccount(userId, accountId);
    const newAccountsArr = updateAccounts(id, amount, UPDATE_TYPE_CREDIT);
    saveToJson("accounts.json", newAccountsArr);
};

const checkUserBalanceOrThrow = (withdrawAccountId, whereToUpdate, amount) => {
    const totalMoney = getMoneyAmount(withdrawAccountId, whereToUpdate);
    if (totalMoney - amount < 0) {
        throw Error(
            "Can't transfer money (The user can't getting into overdraft)"
        );
    }
};

export const transferMoney = (
    { accountId, destinationAccountId, amount },
    userId,
    whereToUpdate
) => {
    const depositAccount = checkAccountExistOrThrow(destinationAccountId);
    const withdrawAccount = getRequestedAccount(userId, accountId);
    checkUserBalanceOrThrow(withdrawAccount.id, whereToUpdate, amount);
    //Withdraw
    let updatedAccounts = updateAccounts(
        withdrawAccount.id,
        amount * -1,
        whereToUpdate
    );
    //Deposit
    updatedAccounts = updateAccounts(
        depositAccount.id,
        amount,
        UPDATE_TYPE_CASH,
        updatedAccounts
    );
    saveToJson("accounts.json", updatedAccounts);
};
