import React from "react";
import { User } from "../../types/types";
import { StyledGridWrapper } from "../styledGridWrapper/StyledGridWrapper";
import UserAccountCard from "../userAccountCard/UserAccountCard";

interface DisplayResultsProps {
    currResult: User | User[] | undefined;
    onUserCardClicked: (user: User) => void;
}

const DisplayResults = ({
    currResult,
    onUserCardClicked,
}: DisplayResultsProps) => {
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
