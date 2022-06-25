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
    const userAccountsData = await Promise.all(
        requestedUser.accounts.map(async (accountId) => {
            const account = await Account.findById(accountId);
            return account;
        })
    );
    const userData = {
        userId: requestedUser._id,
        userName: requestedUser.name,
        phone: requestedUser.phone,
        email: requestedUser.email,
        accounts: userAccountsData,
    };

    return userData;
};

export const getAllUsers = async () => {
    const users = await User.find();

    const usersData = await Promise.all(
        users.map(async (user) => {
            const userData = await getUserData(user._id);
            return userData;
        })
    );

    return usersData;
};

const createNewAccount = (newUserId) => {
    return {
        cash: 0,
        credit: 0,
        isActive: true,
        permittedUsers: [newUserId],
    };
};

export const addNewUser = async ({ name, email, phone }) => {
    if (User.find({ email }) || User.find({ phone })) {
        throw Error("This user already exist!");
    }
    const newUser = new User({
        name,
        email,
        phone,
    });
    const newAccount = new Account(createNewAccount(newUser._id));
    newUser.accounts.push(newAccount._id);
    const savedAccount = await newAccount.save();
    const savedUser = await newUser.save();

    return { savedUser, savedAccount };
};

export const depositCash = async ({ accountId, amount }, userId) => {
    const { _id } = await getRequestedAccount(userId, accountId);
    const updatedAccount = await Account.findByIdAndUpdate(
        { _id },
        { $inc: { cash: amount } },
        { new: true }
    );
    return updatedAccount;
};

const getMoneyAmount = async (accountId, fromWhereToWithdraw) => {
    const account = await Account.findById(accountId);

    return account[fromWhereToWithdraw];
};

export const withdrawMoney = async (
    { accountId, amount },
    userId,
    fromWhereToWithdraw
) => {
    const { _id } = await getRequestedAccount(userId, accountId);
    await checkUserBalanceOrThrow(_id, fromWhereToWithdraw, amount);
    const updatedAccount = await updateAccounts(
        _id,
        amount * -1,
        fromWhereToWithdraw
    );
    return updatedAccount;
};

export const updateCredit = async ({ accountId, amount }, userId) => {
    const { _id } = await getRequestedAccount(userId, accountId);
    const updatedAccount = await updateAccounts(
        _id,
        amount,
        UPDATE_TYPE_CREDIT
    );
    return updatedAccount;
};

const checkUserBalanceOrThrow = async (
    withdrawAccountId,
    whereToUpdate,
    amount
) => {
    const totalMoney = await getMoneyAmount(withdrawAccountId, whereToUpdate);
    if (totalMoney - amount < 0) {
        throw Error(
            "Can't transfer money (The user can't getting into overdraft)"
        );
    }
};

export const transferMoney = async (
    { accountId, destinationAccountId, amount },
    userId,
    whereToUpdate
) => {
    const depositAccount = await checkAccountExistOrThrow(destinationAccountId);
    const withdrawAccount = await getRequestedAccount(userId, accountId);
    await checkUserBalanceOrThrow(withdrawAccount.id, whereToUpdate, amount);
    //Withdraw
    let updatedAccounts = await updateAccounts(
        withdrawAccount._id,
        amount * -1,
        whereToUpdate
    );
    //Deposit
    updatedAccounts = await updateAccounts(
        depositAccount._id,
        amount,
        UPDATE_TYPE_CASH,
        updatedAccounts
    );
};
