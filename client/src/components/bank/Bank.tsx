import React, { useState } from "react";
import ReactJson from "react-json-view";
import { useBank } from "../../context/bank.context";
import { User } from "../../types/types";
import DepositCash from "../depositCash/DepositCash";
import DisplayResults from "../displayResults/DisplayResults";
import GetAllUsers from "../getAllUsers/GetAllUsers";
import GetUser from "../getUser/GetUser";
import InputBar from "../inputBar/InputBar";
import Modal from "../modal/Modal";
import ResultsView from "../resultsView/ResultsView";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";

const Bank = () => {
    const { setIsModalOpen, setSelectedUser, requestedData } = useBank();

    const onUserCardClicked = (user: User) => {
        setIsModalOpen(true);
        setSelectedUser(user);
    };

    return (
        <>
            <Modal></Modal>
            <StyledFlexWrapper
                childWidth="50%"
                // marginTop="2rem"
                flexDirection="column"
                justifyContent="flex-start"
                marginTop="2rem"
            >
                <StyledFlexWrapper>
                    <GetAllUsers></GetAllUsers>
                    <GetUser></GetUser>
                    <DepositCash></DepositCash>
                </StyledFlexWrapper>

                {requestedData.length > 0 && (
                    <StyledFlexWrapper>
                        <InputBar></InputBar>
                    </StyledFlexWrapper>
                )}

                <StyledFlexWrapper
                    flexDirection="column"
                    justifyContent="flex-start"
                    overflowY="scroll"
                >
                    <DisplayResults
                        onUserCardClicked={onUserCardClicked}
                    ></DisplayResults>
                </StyledFlexWrapper>
            </StyledFlexWrapper>
        </>
    );
};

export default Bank;
