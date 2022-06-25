import React, { useEffect } from "react";
import { useBank } from "../../context/bank.context";
import Button from "../button/Button";
import Input from "../input/Input";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

const AddUser = () => {
    const { setRequestedData, setCurrEndpoint, setCurrReqType, setCurrResult } =
        useBank();

    const openInputBar = (requestedInput: string[]) => {
        setCurrResult([]);
        setRequestedData(requestedInput);
        setCurrEndpoint("/users");
        setCurrReqType("post");
    };

    return (
        <StyledFlexWrapper>
            <Button
                onBtnClicked={() => openInputBar(["name", "email", "phone"])}
                title="Add New User"
            ></Button>
        </StyledFlexWrapper>
    );
};

export default AddUser;
