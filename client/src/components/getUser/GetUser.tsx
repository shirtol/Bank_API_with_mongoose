import React, { useEffect, useState } from "react";
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
    const { setRequestedData, setCurrEndpoint, setCurrReqType, setCurrResult } =
        useBank();

    const openInputBar = (requestedInput: string[]) => {
        setCurrResult([]);
        setRequestedData(requestedInput);
        setCurrEndpoint("/user");
        setCurrReqType("get");
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
