import React, { useEffect, useState } from "react";
import { useBank } from "../../context/bank.context";
import { fetchData } from "../../networkUtils/networkUtils";
import Button from "../button/Button";
import { StyledInput } from "../input/StyledInput";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

export interface InputObj {
    [key: string]: string | number;
    ["user id"]: string;
    name: string;
    email: string;
    phone: string;
    ["account id"]: string;
    amount: string;
}

const InputBar = () => {
    const { requestedData, currEndpoint, currReqType, setCurrResult } =
        useBank();
    const [inputBarTerms, setInputBarTerms] = useState<Partial<InputObj>>(
        requestedData!.reduce((acc: Partial<InputObj>, curr: string) => {
            return { ...acc, [curr]: "" };
        }, {})
    );

    const onInputChange = (value: string, inputStr: string) => {
        setInputBarTerms({ ...inputBarTerms, [inputStr]: value });
    };

    const sendRequest = async () => {
        const data = await fetchData(currEndpoint, currReqType, inputBarTerms);
        setCurrResult(data);
        console.log(data);
    };

    const renderInputs = () => {
        return requestedData!.map((inputStr) => {
            return (
                <StyledInput
                    key={inputStr}
                    placeholder={inputStr}
                    value={inputBarTerms![inputStr]}
                    onChange={(e) => onInputChange(e.target.value, inputStr)}
                ></StyledInput>
            );
        });
    };

    return (
        <StyledFlexWrapper>
            <StyledFlexWrapper>{renderInputs()}</StyledFlexWrapper>
            <Button onBtnClicked={sendRequest} title={"Submit"}></Button>
        </StyledFlexWrapper>
    );
};

export default InputBar;
