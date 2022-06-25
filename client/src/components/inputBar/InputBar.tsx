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
    accountId: string;
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

    useEffect(() => {
        setInputBarTerms(
            requestedData!.reduce((acc: Partial<InputObj>, curr: string) => {
                return { ...acc, [curr]: "" };
            }, {})
        );
    }, [requestedData]);

    const onInputChange = (value: string, inputStr: string) => {
        console.log(inputStr);

        setInputBarTerms({ ...inputBarTerms, [inputStr]: value });
    };

    const sendRequest = async () => {
        console.log(inputBarTerms);

        try {
            const data = await fetchData(
                currEndpoint,
                currReqType,
                inputBarTerms
            );
            setCurrResult(data);
            console.log(data);
        } catch (err: any) {
            console.log(err.response);
        }
    };

    const renderInputs = () => {
        return requestedData!.map((inputStr) => {
            return (
                <StyledInput
                    type={inputStr === "amount" ? "number" : "text"}
                    key={inputStr}
                    placeholder={inputStr}
                    value={inputBarTerms![inputStr] ?? ""}
                    onChange={(e) => onInputChange(e.target.value, inputStr)}
                ></StyledInput>
            );
        });
    };

    return (
        <StyledFlexWrapper
            flexDirection="column"
            gap="1rem"
            width="max-content"
        >
            <StyledFlexWrapper flexDirection="column">
                {renderInputs()}
            </StyledFlexWrapper>

            <Button
                onBtnClicked={sendRequest}
                title={"Submit"}
                btnWidth="40% !important"
            ></Button>
        </StyledFlexWrapper>
    );
};

export default InputBar;
