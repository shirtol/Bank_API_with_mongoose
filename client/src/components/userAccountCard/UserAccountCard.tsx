import React from "react";
import { User } from "../../types/types";
import DisplayUserAccounts from "../displayUserAccounts/DisplayUserAccounts";
import { StyledId } from "../styledId/StyledId";
import { StyledName } from "../styledName/StyledName";

interface UserAccountCardProps {
    user: User;
}

const UserAccountCard = ({ user }: UserAccountCardProps) => {
    return (
        <>
            <StyledName>{user.userName}</StyledName>
            <StyledId>{user.userId}</StyledId>
            <DisplayUserAccounts
                userAccounts={user.accounts}
            ></DisplayUserAccounts>
        </>
    );
};

export default UserAccountCard;
