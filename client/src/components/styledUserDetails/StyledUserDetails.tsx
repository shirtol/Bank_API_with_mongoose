import React from "react";
import styled from "styled-components";
import device from "../../utils/mediaQuerySizes";

export const StyledUserDetails = styled.h3`
    font-size: 1.2rem;
    @media ${device.laptop} {
        font-size: 1rem;
    }
    @media ${device.mobileL} {
        font-size: 0.8rem;
    }
`;
