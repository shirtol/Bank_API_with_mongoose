import React from "react";
import { User } from "../../types/types";
import DisplayUserAccounts from "../displayUserAccounts/DisplayUserAccounts";
import { StyledUserDetails } from "../styledUserDetails/StyledUserDetails";
import { StyledName } from "../styledName/StyledName";
import { StyledCard } from "../styledCard/StyledCard";

interface UserAccountCardProps {
    user: User;
    onUserCardClicked: () => void;
}

const UserAccountCard = ({ user, onUserCardClicked }: UserAccountCardProps) => {
    return (
        <StyledCard onClick={onUserCardClicked}>
            <StyledName>{user.userName}</StyledName>
            <StyledUserDetails>{user.email}</StyledUserDetails>
            <StyledUserDetails>{user.phone}</StyledUserDetails>
            {/* <DisplayUserAccounts
                userAccounts={user.accounts}
            ></DisplayUserAccounts> */}
        </StyledCard>
    );
};

export default UserAccountCard;
