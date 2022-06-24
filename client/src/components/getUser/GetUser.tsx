import React, { useState } from "react";
import { getUser } from "../../networkUtils/networkUtils";
import { User } from "../../types/types";
import Button from "../button/Button";
import Input from "../input/Input";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

interface GetUserProps {
    setResults: (res: User) => void;
}

const GetUser = ({ setResults }: GetUserProps) => {
    const fetchUser = async () => {
        // const user = await getUser(term);
        // setResults(user);
    };

    return (
        <StyledFlexWrapper>
            <Button onBtnClicked={fetchUser} title="get user"></Button>
        </StyledFlexWrapper>
    );
};

export default GetUser;
