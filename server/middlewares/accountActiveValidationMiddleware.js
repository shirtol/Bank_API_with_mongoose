import { getAccount } from "../utils/accountUtils.js";

export const accountActiveValidation = async (req, res, next) => {
    const accountId = req?.body?.accountId;
    const destinationAccountId = req?.body?.destinationAccountId;
    const account = await getAccount(accountId);
    const destAccount = await getAccount(destinationAccountId);
    if (account) {
        if (!account.isActive) {
            return res.status(400).send("Account isn't active");
        }
    }
    if (destAccount) {
        if (!destAccount.isActive) {
            throw Error(
                "The account you are trying to transfer money to isn't active"
            );
        }
    }

    next();
};
