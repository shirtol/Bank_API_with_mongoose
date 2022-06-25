import React, { useState } from "react";
import { useBank } from "../../context/bank.context";
import { getUser } from "../../networkUtils/networkUtils";
import { User } from "../../types/types";
import Button from "../button/Button";
import Input from "../input/Input";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

const GetUser = () => {
    const fetchUser = async () => {
        // const user = await getUser(term);
        // setResults(user);
    };
    const { setRequestedData, setCurrResult } = useBank();

    const openInputBar = (requestedInput: string[]) => {
        setRequestedData(requestedInput);
    };

    return (
        <StyledFlexWrapper>
            <Button
                onBtnClicked={() => openInputBar(["user id"])}
                title="get user"
            ></Button>
        </StyledFlexWrapper>
    );
};

export default GetUser;
