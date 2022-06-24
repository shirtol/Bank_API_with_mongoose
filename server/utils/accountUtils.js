import {
    getUsersAndAccountsJson,
    loadJson,
    saveToJson,
} from "../utils/jsonUtils.js";
import { getUserData } from "../controllers/userController.js";
import { UPDATE_TYPE_CASH } from "../consts.js";
import { Account } from "../models/account/Account.models.js";

export const getAccount = async (accountId) => {
    const account = await Account.findById(accountId);
    return account;
};

export const updateAccounts = (
    accountId,
    amountOfMoney,
    fromWhere = UPDATE_TYPE_CASH,
    accountsArr
) => {
    const accounts = accountsArr ?? loadJson("accounts.json");
    const newAccountsArr = accounts.map((account) => {
        if (account.id === accountId) {
            account[fromWhere] += amountOfMoney;
        }

        return account;
    });

    return newAccountsArr;
};

export const getRequestedAccount = async (userId, accountId) => {
    const accountFromAllAccounts = await getAccount(accountId);
    const user = await getUserData(userId);

    const accountFromUser = user.accounts.find(
        (account) =>
            account._id.toString() === accountFromAllAccounts?._id.toString()
    );
    return accountFromUser;
};

export const checkAccountExistOrThrow = async (accountId) => {
    const account = await getAccount(accountId);
    if (!account) {
        throw Error("Destination account doesn't exist");
    }
    return account;
};

export const updateAccountIsActive = ({ accountId, isActive }) => {
    const { accounts } = getUsersAndAccountsJson();
    let selectedAccount = undefined;
    const newAccountsArr = accounts.map((account) => {
        if (account.id === accountId) {
            account.isActive = isActive;
            selectedAccount = account;
        }

        return account;
    });
    saveToJson("accounts.json", newAccountsArr);

    return selectedAccount;
};
