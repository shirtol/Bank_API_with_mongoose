import React from "react";
import { Account } from "../../types/types";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";
import { StyledUserDetails } from "../styledUserDetails/StyledUserDetails";

interface DisplayUserAccountsProps {
    userAccounts: Account[];
}

const DisplayUserAccounts = ({ userAccounts }: DisplayUserAccountsProps) => {
    const renderUserAccounts = () => {
        return userAccounts.map((account) => {
            return (
                <StyledFlexWrapper>
                    <StyledUserDetails></StyledUserDetails>
                    <h2>Cash: {account.cash}</h2>
                    <h2>Credit: {account.credit}</h2>
                    <h2>Is Active: {account.isActive.toString()}</h2>
                </StyledFlexWrapper>
            );
        });
    };

    return <div>{renderUserAccounts()}</div>;
};

export default DisplayUserAccounts;
