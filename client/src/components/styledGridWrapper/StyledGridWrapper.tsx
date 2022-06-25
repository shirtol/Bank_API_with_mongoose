import { ReactNode } from "react";
import styled from "styled-components";
import device from "../../utils/mediaQuerySizes";

interface StyledGridWrapperProps {
    gridTemplateCol?: string;
    alignSelf?: string;
    children: ReactNode;
    overflowY?: string;
    gridTemplateColLaptop?: string;
    gridTemplateColMobileL?: string;
}

export const StyledGridWrapper = styled.div<StyledGridWrapperProps>`
    display: grid;
    grid-template-columns: ${(props) =>
        props.gridTemplateCol ?? "repeat(3, 1fr)"};
    gap: 2rem;
    justify-items: center;
    padding: 2rem;
    grid-auto-rows: 1fr;
    height: max-content;
    overflow-y: ${(props) => props.overflowY ?? "scroll"};
    width: 90%;
    align-self: ${(props) => props.alignSelf ?? "center"};
    @media ${device.laptop} {
        grid-template-columns: ${(props) =>
            props.gridTemplateColLaptop ?? "repeat(2, 1fr)"};
    }
    @media ${device.mobileL} {
        grid-template-columns: ${(props) =>
            props.gridTemplateColMobileL ?? "repeat(1, 1fr)"};
    }
`;
