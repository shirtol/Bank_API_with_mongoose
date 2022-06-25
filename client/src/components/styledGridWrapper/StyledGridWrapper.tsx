import { ReactNode } from "react";
import styled from "styled-components";

interface StyledGridWrapperProps {
    gridTemplateCol?: string;
    alignSelf?: string;
    children: ReactNode;
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
    overflow-y: scroll;
    width: 90%;
    align-self: ${(props) => props.alignSelf ?? "center"};
`;
