import { StyledButton } from "./StyledButton";

interface ButtonProps {
    onBtnClicked: () => void;
    title: string;
    btnWidth?: string;
}
const Button = ({ onBtnClicked, title, btnWidth }: ButtonProps) => {
    return (
        <StyledButton onClick={onBtnClicked} width={btnWidth}>
            {title}
        </StyledButton>
    );
};

export default Button;
