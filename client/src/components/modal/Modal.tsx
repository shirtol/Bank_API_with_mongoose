import React from "react";
import { StyledIcon } from "../styledIcon/StyledIcon";
import { StyledModal } from "../styledModal/StyledModal";
import { StyledModalWrapper } from "../styledModalWrapper/StyledModalWrapper";

interface ModalProps {
    isShown: boolean;
    onCloseModal: () => void;
}

const Modal = ({ isShown, onCloseModal }: ModalProps) => {
    return (
        <>
            {isShown && (
                <StyledModalWrapper>
                    <StyledModal>
                        <StyledIcon
                            className="fa-solid fa-xmark"
                            onClick={onCloseModal}
                        ></StyledIcon>
                    </StyledModal>
                </StyledModalWrapper>
            )}
        </>
    );
};

export default Modal;
