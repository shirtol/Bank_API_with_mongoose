import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    accounts: [
        {
            type: String,
        },
    ],
});

export const User = mongoose.model("users", userSchema);
