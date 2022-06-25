import { getUserData } from "../controllers/userController.js";
import { UPDATE_TYPE_CASH } from "../consts.js";
import { Account } from "../models/account/Account.models.js";

export const getAccount = async (accountId) => {
    const account = await Account.findById(accountId);
    return account;
};

export const updateAccounts = async (
    accountId,
    amountOfMoney,
    fromWhere = UPDATE_TYPE_CASH,
    accountsArr
) => {
    const accounts = accountsArr ?? (await Account.find());
    const updatedAccount = await Account.findByIdAndUpdate(
        { _id: accountId },
        { $inc: { [fromWhere]: amountOfMoney } },
        { new: true }
    );

    return updatedAccount;
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

export const updateAccountIsActive = async ({ accountId, isActive }) => {
    const updatedAccount = await Account.findByIdAndUpdate(
        { _id: accountId },
        { isActive },
        { new: true }
    );

    return updatedAccount;
};
