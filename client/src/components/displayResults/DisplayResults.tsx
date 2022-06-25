import React from "react";
import { useBank } from "../../context/bank.context";
import { User } from "../../types/types";
import { StyledGridWrapper } from "../styledGridWrapper/StyledGridWrapper";
import UserAccountCard from "../userAccountCard/UserAccountCard";

interface DisplayResultsProps {
    onUserCardClicked: (user: User) => void;
}

const DisplayResults = ({ onUserCardClicked }: DisplayResultsProps) => {
    const { currResult } = useBank();

    const handleDisplay = () => {
        if (Array.isArray(currResult)) {
            return currResult.map((user) => {
                return (
                    <UserAccountCard
                        onUserCardClicked={onUserCardClicked}
                        user={user}
                        key={user.userId}
                    ></UserAccountCard>
                );
            });
        }
    };

    return <StyledGridWrapper>{handleDisplay()}</StyledGridWrapper>;
};

export default DisplayResults;
