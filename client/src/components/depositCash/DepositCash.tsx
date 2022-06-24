import React from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

interface DepositCashProps {}

const DepositCash = ({}: DepositCashProps) => {
    const depositCash = () => {};

    return (
        <StyledFlexWrapper>
            <Button onBtnClicked={depositCash} title="Deposit cash"></Button>
            {/* <Input placeholder="enter amount to deposit" value={amount} onInputChange={setAmount}></Input> */}
        </StyledFlexWrapper>
    );
};

export default DepositCash;
