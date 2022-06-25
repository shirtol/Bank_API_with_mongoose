import React from "react";
import styled from "styled-components";

export const StyledCard = styled.div`
    width: max-content;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 4px;
    padding: 1.2rem;
    cursor: pointer;
    & > * {
        text-align: center;
    }
`;
