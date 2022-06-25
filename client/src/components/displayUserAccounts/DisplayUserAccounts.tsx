import { useBank } from "../../context/bank.context";
import { changeAccountActiveState } from "../../networkUtils/networkUtils";
import { Account } from "../../types/types";
import Button from "../button/Button";
import { StyledFlexWrapper } from "../styledFlexWrapper/StyledFlexWrapper";
import { StyledUserDetails } from "../styledUserDetails/StyledUserDetails";

interface DisplayUserAccountsProps {
    userAccounts: Account[];
    userId: string;
}

const DisplayUserAccounts = ({
    userAccounts,
    userId,
}: DisplayUserAccountsProps) => {
    const { setIsModalOpen } = useBank();

    const onActivateAccountClicked = async (account: Account) => {
        await changeAccountActiveState(userId, {
            accountId: account._id,
            isActive: !account.isActive,
        });
        account.isActive = !account.isActive;
        setIsModalOpen(false);
    };

    const renderUserAccounts = () => {
        return userAccounts.map((account) => {
            return (
                <StyledFlexWrapper flexDirection="column" key={account._id}>
                    <StyledFlexWrapper flexDirection="column">
                        <StyledUserDetails>Account:</StyledUserDetails>
                        <StyledUserDetails>{account._id}</StyledUserDetails>
                    </StyledFlexWrapper>
                    <StyledUserDetails>Cash: {account.cash}</StyledUserDetails>
                    <StyledUserDetails>
                        Credit: {account.credit}
                    </StyledUserDetails>
                    <Button
                        onBtnClicked={() => onActivateAccountClicked(account)}
                        title={account.isActive ? "Deactivate" : "Activate"}
                        btnWidth="40% !important"
                    ></Button>
                </StyledFlexWrapper>
            );
        });
    };

    return (
        <StyledFlexWrapper flexDirection="column">
            <div>{renderUserAccounts()}</div>
        </StyledFlexWrapper>
    );
};

export default DisplayUserAccounts;
