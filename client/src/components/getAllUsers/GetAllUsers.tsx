import React, { useState } from "react";
import { useBank } from "../../context/bank.context";
import { getAllUsers } from "../../networkUtils/networkUtils";
import { User } from "../../types/types";
import Button from "../button/Button";

const GetAllUsers = () => {
    const { setCurrResult } = useBank();

    const fetchAllUsers = async () => {
        const allUsers = await getAllUsers();
        console.log(allUsers);
        setCurrResult(allUsers);
    };

    return <Button onBtnClicked={fetchAllUsers} title="get all users"></Button>;
};

export default GetAllUsers;
