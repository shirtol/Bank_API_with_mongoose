import styled from "styled-components";
import device from "../../utils/mediaQuerySizes";

interface StyledButtonProps {
    width?: string;
}

export const StyledButton = styled.div<StyledButtonProps>`
    padding: 8px 20px;
    font-size: 16px;
    letter-spacing: 2px;
    border-radius: 8px;
    background-color: #e58c8acc;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 5px 7px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    color: #fff;
    width: ${(props) => props.width ?? "100% !important"};
    cursor: pointer;
    text-align: center;
    @media ${device.mobileL} {
        font-size: 12px;
    }
`;
