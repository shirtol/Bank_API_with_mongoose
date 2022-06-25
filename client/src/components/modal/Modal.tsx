import React from "react";
import { Account, User } from "../../types/types";
import DisplayUserAccounts from "../displayUserAccounts/DisplayUserAccounts";
import { StyledIcon } from "../styledIcon/StyledIcon";
import { StyledModal } from "../styledModal/StyledModal";
import { StyledModalWrapper } from "../styledModalWrapper/StyledModalWrapper";

interface ModalProps {
    isShown: boolean;
    onCloseModal: () => void;
    user?: User;
}

const Modal = ({ isShown, onCloseModal, user }: ModalProps) => {
    return (
        <>
            {isShown && (
                <StyledModalWrapper>
                    <StyledModal>
                        <StyledIcon
                            className="fa-solid fa-xmark"
                            onClick={onCloseModal}
                        ></StyledIcon>
                        <DisplayUserAccounts
                            userAccounts={user!.accounts}
                        ></DisplayUserAccounts>
                    </StyledModal>
                </StyledModalWrapper>
            )}
        </>
    );
};

export default Modal;
