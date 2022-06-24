import { getUsersAndAccountsJson } from "../utils/jsonUtils.js";
import { isNumberOrThrow, isBoolOrThrow } from "../utils/utils.js";
import { Account } from "../models/account/Account.models.js";

//isAbove=true: equal to or above/ below the threshold.
export const filterByAmount = async ({ threshold, isAbove }, filterBy) => {
    isNumberOrThrow(threshold);
    isBoolOrThrow(isAbove);
    return isAbove
        ? await Account.find({ [filterBy]: { $gte: threshold } })
        : await Account.find({ [filterBy]: { $lt: threshold } });
    // if (isAbove) {
    //     return await Account.find({ [filterBy]: { $gte: threshold } });
    // } else {
    //     return await Account.find({ filterBy: { $lt: threshold } });
    // }
};
