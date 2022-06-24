import { getRequestedAccount } from "../utils/accountUtils.js";

export const accountExistValidation = async (req, res, next) => {
    try {
        const userId = req.headers["user-id"];
        const accountId = req?.body?.accountId;
        const account = await getRequestedAccount(userId, accountId);
        if (!account) {
            throw Error("This account doesn't exist");
        }
    } catch (err) {
        console.log(err.message);
    }
    next();
};
