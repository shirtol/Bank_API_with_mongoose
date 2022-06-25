import React, { useEffect, useState } from "react";
import { StyledInput } from "../input/StyledInput";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

interface InputBarProps {
    requestedInputs: string[];
}

interface InputObj {
    [key: string]: string | number;
    ["user id"]: string;
    name: string;
    email: string;
    phone: string;
    ["account id"]: string;
    amount: string;
}

const InputBar = ({ requestedInputs }: InputBarProps) => {
    const [inputBarTerms, setInputBarTerms] = useState<Partial<InputObj>>(
        requestedInputs.reduce((acc: Partial<InputObj>, curr: string) => {
            return { ...acc, [curr]: "" };
        }, {})
    );

    const onInputChange = (value: string, inputStr: string) => {
        setInputBarTerms({ ...inputBarTerms, [inputStr]: value });
    };

    const renderInputs = () => {
        return requestedInputs.map((inputStr) => {
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

    return <StyledFlexWrapper>{renderInputs()}</StyledFlexWrapper>;
};

export default InputBar;
