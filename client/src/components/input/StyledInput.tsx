import styled from "styled-components";
import device from "../../utils/mediaQuerySizes";

interface StyledInputProps {}

export const StyledInput = styled.input<StyledInputProps>`
    letter-spacing: 1.5px;
    padding-left: 5px;
    height: 30px;
    width: 300px;
    border-radius: 4px;
    border: none;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 2px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    @media ${device.mobileL} {
        width: 15rem;
    }
`;
