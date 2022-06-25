import React from "react";
import { useBank } from "../../context/bank.context";
import { Account, User } from "../../types/types";
import AccountCard from "../accountCard/AccountCard";
import { StyledGridWrapper } from "../styledGridWrapper/StyledGridWrapper";
import UserAccountCard from "../userAccountCard/UserAccountCard";

interface DisplayResultsProps {
    onUserCardClicked: (user: User) => void;
}

const DisplayResults = ({ onUserCardClicked }: DisplayResultsProps) => {
    const { currResult, currEndpoint } = useBank();

    const renderUserCard = (user: User) => {
        return (
            <UserAccountCard
                onUserCardClicked={onUserCardClicked}
                user={user}
                key={user.userId}
            ></UserAccountCard>
        );
    };

    const renderAccountCard = (account: Account) => {
        return <AccountCard account={account}></AccountCard>;
    };

    const handleDisplay = () => {
        if (Array.isArray(currResult)) {
            return currEndpoint.includes("transfer")
                ? (currResult as Account[]).map(renderAccountCard)
                : (currResult as User[]).map(renderUserCard);
        } else {
            return renderUserCard(currResult as User);
        }
    };

    return (
        <StyledGridWrapper overflowY="visible">
            {handleDisplay()}
        </StyledGridWrapper>
    );
};

export default DisplayResults;
