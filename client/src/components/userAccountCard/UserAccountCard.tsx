import React from "react";
import { User } from "../../types/types";
import DisplayUserAccounts from "../displayUserAccounts/DisplayUserAccounts";
import { StyledUserDetails } from "../styledUserDetails/StyledUserDetails";
import { StyledName } from "../styledName/StyledName";

interface UserAccountCardProps {
    user: User;
}

const UserAccountCard = ({ user }: UserAccountCardProps) => {
    return (
        <div>
            <StyledName>{user.userName}</StyledName>
            <StyledUserDetails>{user.email}</StyledUserDetails>
            <StyledUserDetails>{user.phone}</StyledUserDetails>
            {/* <DisplayUserAccounts
                userAccounts={user.accounts}
            ></DisplayUserAccounts> */}
        </div>
    );
};

export default UserAccountCard;
