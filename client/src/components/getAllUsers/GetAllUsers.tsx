import React, { useState } from "react";
import { useBank } from "../../context/bank.context";
import { getAllUsers } from "../../networkUtils/networkUtils";
import { User } from "../../types/types";
import Button from "../button/Button";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

const GetAllUsers = () => {
    const { setCurrResult, setCurrEndpoint } = useBank();

    const fetchAllUsers = async () => {
        setCurrResult([]);
        const allUsers = await getAllUsers();
        console.log(allUsers);
        setCurrResult(allUsers);
        setCurrEndpoint("/users");
    };

    return (
        <StyledFlexWrapper>
            <Button onBtnClicked={fetchAllUsers} title="get all users"></Button>
        </StyledFlexWrapper>
    );
};

export default GetAllUsers;
