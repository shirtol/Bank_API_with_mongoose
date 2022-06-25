import React, { useEffect } from "react";
import { useBank } from "../../context/bank.context";
import Button from "../button/Button";
import Input from "../input/Input";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

const WithdrawCredit = () => {
    const { setRequestedData, setCurrEndpoint, setCurrReqType, setCurrResult } =
        useBank();

    const openInputBar = (requestedInput: string[]) => {
        setCurrResult([]);
        setRequestedData(requestedInput);
        setCurrEndpoint("/user/credit/withdraw");
        setCurrReqType("put");
    };

    return (
        <StyledFlexWrapper>
            <Button
                onBtnClicked={() =>
                    openInputBar(["user id", "accountId", "amount"])
                }
                title="Withdraw credit"
            ></Button>
        </StyledFlexWrapper>
    );
};

export default WithdrawCredit;
