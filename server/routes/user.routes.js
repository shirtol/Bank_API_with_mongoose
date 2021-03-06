import express from "express";
import { UPDATE_TYPE_CASH, UPDATE_TYPE_CREDIT } from "../consts.js";
import {
    getUserData,
    getAllUsers,
    addNewUser,
    depositCash,
    withdrawMoney,
    updateCredit,
    transferMoney,
} from "../controllers/userController.js";
import { getAccount } from "../utils/accountUtils.js";

export const route = express.Router();

route.get("/users", async (req, res) => {
    try {
        const allUsers = await getAllUsers();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

route.get("/user", async (req, res) => {
    try {
        const userId = req.headers["user-id"];
        const userData = await getUserData(userId);
        res.status(200).json(userData);
    } catch (err) {
        res.status(404).send(err.message);
    }
});

route.post("/users", async (req, res) => {
    try {
        const newUser = await addNewUser(req.body);
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

route.put("/user/cash/deposit", async (req, res) => {
    try {
        const userId = req.headers["user-id"];
        await depositCash(req.body, userId);
        res.status(200).json(await getUserData(userId));
    } catch (err) {
        res.status(404).send(err.message);
    }
});

route.put("/user/cash/withdraw", async (req, res) => {
    try {
        const userId = req.headers["user-id"];
        await withdrawMoney(req.body, userId, UPDATE_TYPE_CASH);
        res.status(200).json(await getUserData(userId));
    } catch (err) {
        res.status(400).send(err.message);
    }
});

route.put("/user/credit/withdraw", async (req, res) => {
    try {
        const userId = req.headers["user-id"];
        await withdrawMoney(req.body, userId, UPDATE_TYPE_CREDIT);
        res.status(200).json(await getUserData(userId));
    } catch (err) {
        res.status(400).send(err.message);
    }
});

route.put("/user/credit/update", async (req, res) => {
    try {
        const userId = req.headers["user-id"];
        await updateCredit(req.body, userId);
        res.status(200).json(await getUserData(userId));
    } catch (err) {
        res.status(400).send(err.message);
    }
});

route.put("/user/credit/transfer", async (req, res) => {
    try {
        const userId = req.headers["user-id"];
        await transferMoney(req.body, userId, UPDATE_TYPE_CREDIT);
        res.status(200).json([
            await getAccount(req.body.accountId),
            await getAccount(req.body.destinationAccountId),
        ]);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

route.put("/user/cash/transfer", async (req, res) => {
    try {
        const userId = req.headers["user-id"];
        await transferMoney(req.body, userId, UPDATE_TYPE_CASH);
        res.status(200).json([
            await getAccount(req.body.accountId),
            await getAccount(req.body.destinationAccountId),
        ]);
    } catch (err) {
        res.status(400).send(err.message);
    }
});
