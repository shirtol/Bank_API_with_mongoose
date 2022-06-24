import { getUsersAndAccountsJson } from "../utils/jsonUtils.js";
import { User } from "../models/user/User.models.js";

export const userExistValidation = async (req, res, next) => {
    const users = await User.find();
    const userId = req.headers["user-id"];
    const requestedUser = User.findById(userId);
    if (!requestedUser) {
        throw Error("This user doesn't exist");
    }
    next();
};
