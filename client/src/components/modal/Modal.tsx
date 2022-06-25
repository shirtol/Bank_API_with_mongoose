import React from "react";
import { StyledModal } from "../styledModal/StyledModal";
import { StyledModalWrapper } from "../styledModalWrapper/StyledModalWrapper";

interface ModalProps {
    isShown: boolean;
}

const Modal = ({ isShown }: ModalProps) => {
    return (
        <>
            {isShown && (
                <StyledModalWrapper>
                    <StyledModal></StyledModal>
                </StyledModalWrapper>
            )}
        </>
    );
};

export default Modal;
