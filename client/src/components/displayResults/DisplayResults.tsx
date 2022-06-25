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

    const handleDisplay = () => {
        if (Array.isArray(currResult)) {
            console.log(currEndpoint);

            return currEndpoint.includes("transfer")
                ? (currResult as Account[]).map((account: Account) => {
                      return <AccountCard account={account}></AccountCard>;
                  })
                : (currResult as User[]).map((user: User) => {
                      return (
                          <UserAccountCard
                              onUserCardClicked={onUserCardClicked}
                              user={user}
                              key={user.userId}
                          ></UserAccountCard>
                      );
                  });
        } else {
            return (
                <UserAccountCard
                    onUserCardClicked={onUserCardClicked}
                    user={currResult as User}
                ></UserAccountCard>
            );
        }
    };

    return <StyledGridWrapper>{handleDisplay()}</StyledGridWrapper>;
};

export default DisplayResults;
