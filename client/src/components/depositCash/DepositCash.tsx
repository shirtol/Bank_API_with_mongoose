import React, { useEffect } from "react";
import { useBank } from "../../context/bank.context";
import Button from "../button/Button";
import Input from "../input/Input";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

const DepositCash = () => {
    const { setRequestedData, setCurrEndpoint, setCurrReqType, setCurrResult } =
        useBank();

    const openInputBar = (requestedInput: string[]) => {
        setCurrResult([]);
        setRequestedData(requestedInput);
        setCurrEndpoint("/user/cash/deposit");
        setCurrReqType("put");
    };

    return (
        <StyledFlexWrapper>
            <Button
                onBtnClicked={() =>
                    openInputBar(["user id", "accountId", "amount"])
                }
                title="Deposit cash"
            ></Button>
        </StyledFlexWrapper>
    );
};

export default DepositCash;
