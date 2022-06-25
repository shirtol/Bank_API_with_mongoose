import React, { useEffect } from "react";
import { useBank } from "../../context/bank.context";
import Button from "../button/Button";
import Input from "../input/Input";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

const DepositCash = () => {
    const { setRequestedData, setCurrEndpoint, setCurrReqType } = useBank();

    useEffect(() => {
        setCurrEndpoint("/user/cash/deposit");
        setCurrReqType("put");
    }, []);

    const openInputBar = (requestedInput: string[]) => {
        setRequestedData(requestedInput);
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
