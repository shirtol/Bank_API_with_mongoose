export const amountValidation = (req, res, next) => {
    const amount = req?.body?.amount;
    if (amount) {
        if (typeof amount !== "number") {
            return res.status(400).send("Amount type must be number");

            throw Error("Amount type must be number");
        } else if (amount < 0) {
            return res.status(400).send("Amount must be a positive number");

            throw Error("Amount must be a positive number");
        }
    }
    next();
};
