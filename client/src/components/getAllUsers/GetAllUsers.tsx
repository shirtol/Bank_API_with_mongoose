import React, { useState } from "react";
import { useBank } from "../../context/bank.context";
import { getAllUsers } from "../../networkUtils/networkUtils";
import { User } from "../../types/types";
import Button from "../button/Button";

const GetAllUsers = () => {
    const { setCurrResult, setCurrEndpoint } = useBank();

    const fetchAllUsers = async () => {
        setCurrResult([]);
        const allUsers = await getAllUsers();
        console.log(allUsers);
        setCurrResult(allUsers);
        setCurrEndpoint("/users");
    };

    return <Button onBtnClicked={fetchAllUsers} title="get all users"></Button>;
};

export default GetAllUsers;
