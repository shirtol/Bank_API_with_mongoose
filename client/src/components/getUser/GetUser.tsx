import React, { useState } from "react";
import { getUser } from "../../networkUtils/networkUtils";
import { User } from "../../types/types";
import Button from "../button/Button";
import Input from "../input/Input";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

interface GetUserProps {
    setResults: (res: User) => void;
    // requestedResults: string[];
    openInputBar: (reqInput: string[]) => void;
}

const GetUser = ({ setResults, openInputBar }: GetUserProps) => {
    const fetchUser = async () => {
        // const user = await getUser(term);
        // setResults(user);
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
