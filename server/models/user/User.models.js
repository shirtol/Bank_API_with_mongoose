import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error("You must enter a valid email");
            }
        },
    },
    phone: {
        type: String,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw Error("Phone number must be a valid mobile number!");
            }
        },
    },
    accounts: [
        {
            type: String,
        },
    ],
});

export const User = mongoose.model("users", userSchema);
