import { getUsersAndAccountsJson } from "../utils/jsonUtils.js";
import { User } from "../models/user/User.models.js";

export const userExistValidation = async (req, res, next) => {
    const userId = req.headers["user-id"];
    if (userId.length !== 24) return res.status(400).send("Invalid user id");

    const requestedUser = User.findById(userId);

    if (!requestedUser) {
        return res.status(400).send("This user doesn't exist");
    }
    next();
};
