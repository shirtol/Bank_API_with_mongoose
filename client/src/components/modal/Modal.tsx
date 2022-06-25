import { useBank } from "../../context/bank.context";
import DisplayUserAccounts from "../displayUserAccounts/DisplayUserAccounts";
import { StyledIcon } from "../styledIcon/StyledIcon";
import { StyledModal } from "../styledModal/StyledModal";
import { StyledModalWrapper } from "../styledModalWrapper/StyledModalWrapper";

const Modal = () => {
    const { isModalOpen, selectedUser, setIsModalOpen } = useBank();

    console.log(selectedUser);

    return (
        <>
            {isModalOpen && (
                <StyledModalWrapper>
                    <StyledModal>
                        <StyledIcon
                            className="fa-solid fa-xmark"
                            onClick={() => setIsModalOpen(false)}
                        ></StyledIcon>
                        <DisplayUserAccounts
                            userAccounts={selectedUser!.accounts}
                            userId={selectedUser!.userId}
                        ></DisplayUserAccounts>
                    </StyledModal>
                </StyledModalWrapper>
            )}
        </>
    );
};

export default Modal;
