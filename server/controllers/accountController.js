import { getUsersAndAccountsJson } from "../utils/jsonUtils.js";
import { isNumberOrThrow, isBoolOrThrow } from "../utils/utils.js";
import { Account } from "../models/account/Account.models.js";

//isAbove=true: equal to or above/ below the threshold.
export const filterByAmount = ({ threshold, isAbove }, filterBy) => {
    isNumberOrThrow(threshold);
    isBoolOrThrow(isAbove);
    const { accounts } = getUsersAndAccountsJson();
    const filteredAccounts = accounts.filter((account) => {
        if (isAbove) {
            return account[filterBy] >= threshold;
        } else {
            return account[filterBy] < threshold;
        }
    });
    return filteredAccounts;
};
