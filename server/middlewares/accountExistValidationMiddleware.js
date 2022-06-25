import { getRequestedAccount } from "../utils/accountUtils.js";

export const accountExistValidation = async (req, res, next) => {
    const userId = req.headers["user-id"];
    const accountId = req?.body?.accountId;
    console.log(req.body);
    const account = await getRequestedAccount(userId, accountId);
    if (!account) {
        return res.status(400).send("This account doesn't exist");
    }
    next();
};
