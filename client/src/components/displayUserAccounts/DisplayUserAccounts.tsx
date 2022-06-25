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
                <StyledFlexWrapper flexDirection="column" key={account._id}>
                    <StyledFlexWrapper flexDirection="column">
                        <StyledUserDetails>Account:</StyledUserDetails>
                        <StyledUserDetails>{account._id}</StyledUserDetails>
                    </StyledFlexWrapper>
                    <StyledUserDetails>Cash: {account.cash}</StyledUserDetails>
                    <StyledUserDetails>
                        Credit: {account.credit}
                    </StyledUserDetails>
                    <StyledUserDetails>
                        Is Active: {account.isActive.toString()}
                    </StyledUserDetails>
                </StyledFlexWrapper>
            );
        });
    };

    return <div>{renderUserAccounts()}</div>;
};

export default DisplayUserAccounts;
