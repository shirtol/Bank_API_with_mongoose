import React from "react";
import { User } from "../../types/types";
import DisplayUserAccounts from "../displayUserAccounts/DisplayUserAccounts";
import { StyledUserDetails } from "../styledUserDetails/StyledUserDetails";
import { StyledName } from "../styledName/StyledName";
import { StyledCard } from "../styledCard/StyledCard";

interface UserAccountCardProps {
    user: User;
    onUserCardClicked: (user: User) => void;
}

const UserAccountCard = ({ user, onUserCardClicked }: UserAccountCardProps) => {
    return (
        <StyledCard onClick={() => onUserCardClicked(user)}>
            <StyledName>{user.userName}</StyledName>
            <StyledUserDetails>{user.email}</StyledUserDetails>
            <StyledUserDetails>{user.phone}</StyledUserDetails>
        </StyledCard>
    );
};

export default UserAccountCard;
