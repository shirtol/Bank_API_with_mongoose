import React from "react";
import { Account, User } from "../../types/types";
import DisplayUserAccounts from "../displayUserAccounts/DisplayUserAccounts";
import { StyledUserDetails } from "../styledUserDetails/StyledUserDetails";
import { StyledName } from "../styledName/StyledName";
import { StyledCard } from "../styledCard/StyledCard";

interface AccountCardProps {
    account: Account;
}

const AccountCard = ({ account }: AccountCardProps) => {
    return (
        <StyledCard>
            <StyledName>{account._id}</StyledName>
            <StyledUserDetails>Cash : {account.cash}</StyledUserDetails>
            <StyledUserDetails>Credit : {account.credit}</StyledUserDetails>
        </StyledCard>
    );
};

export default AccountCard;
