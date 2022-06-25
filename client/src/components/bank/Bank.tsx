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
import { StyledGridWrapper } from "../styledGridWrapper/StyledGridWrapper";
import TransferMoneyCash from "../transferMoneyCash/TransferMoneyCash";
import WithdrawCash from "../withdrawCash/WithdrawCash";
import WithdrawCredit from "../withdrawCredit/WithdrawCredit";

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
                <StyledGridWrapper
                    gridTemplateCol="repeat(4, 1fr)"
                    overflowY="visible"
                >
                    <GetAllUsers></GetAllUsers>
                    <GetUser></GetUser>
                    <DepositCash></DepositCash>
                    <WithdrawCash></WithdrawCash>
                    <WithdrawCredit></WithdrawCredit>
                    <TransferMoneyCash></TransferMoneyCash>
                </StyledGridWrapper>

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
