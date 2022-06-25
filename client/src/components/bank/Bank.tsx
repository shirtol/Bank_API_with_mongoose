import React, { useState } from "react";
import ReactJson from "react-json-view";
import { User } from "../../types/types";
import DepositCash from "../depositCash/DepositCash";
import DisplayResults from "../displayResults/DisplayResults";
import GetAllUsers from "../getAllUsers/GetAllUsers";
import GetUser from "../getUser/GetUser";
import Modal from "../modal/Modal";
import ResultsView from "../resultsView/ResultsView";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

const Bank = () => {
    const [currResult, setCurrResult] = useState<User | User[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onUserCardClicked = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <Modal isShown={isModalOpen}></Modal>
            <StyledFlexWrapper
                childWidth="50%"
                // marginTop="2rem"
                flexDirection="column"
                justifyContent="flex-start"
                marginTop="2rem"
            >
                <StyledFlexWrapper>
                    <GetAllUsers setResults={setCurrResult}></GetAllUsers>
                    <GetUser setResults={setCurrResult}></GetUser>
                    <DepositCash></DepositCash>
                </StyledFlexWrapper>
                <StyledFlexWrapper
                    flexDirection="column"
                    justifyContent="flex-start"
                    overflowY="scroll"
                >
                    <DisplayResults
                        currResult={currResult}
                        onUserCardClicked={onUserCardClicked}
                    ></DisplayResults>
                </StyledFlexWrapper>
            </StyledFlexWrapper>
        </>
    );
};

export default Bank;
