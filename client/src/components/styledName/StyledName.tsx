import React from "react";
import styled from "styled-components";
import device from "../../utils/mediaQuerySizes";

export const StyledName = styled.h3`
    font-size: 1.4rem;
    @media ${device.laptop} {
        font-size: 1.2rem;
    }
`;
