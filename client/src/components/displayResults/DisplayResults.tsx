import React from "react";
import { User } from "../../types/types";
import UserAccountCard from "../userAccountCard/UserAccountCard";

interface DisplayResultsProps {
    currResult: User | User[] | undefined;
}

const DisplayResults = ({ currResult }: DisplayResultsProps) => {
    const handleDisplay = () => {
        if (Array.isArray(currResult)) {
            return currResult.map((user) => {
                return <UserAccountCard user={user}></UserAccountCard>;
            });
        }
    };

    return <div>{handleDisplay()}</div>;
};

export default DisplayResults;
