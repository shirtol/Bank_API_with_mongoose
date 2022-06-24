import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    cash: {
        type: Number,
    },
    credit: {
        type: Number,
    },
    isActive: {
        type: Boolean,
    },
    permittedUsers: [
        {
            type: String,
        },
    ],
});

export const Account = mongoose.model("accounts", accountSchema);
