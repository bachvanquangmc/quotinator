import React from 'react';
import styled from 'styled-components';

const MainCont = styled.div`
    display: flex;
`;

const HeaderText = styled.h1`
    display: flex;
    font-size: ${props=>props.fsize};
    font-weight: ${props=>props.fweight};
`;

const Header = ({
    header="Default",
    fontsize="28px",
    fontweight="600",
}) => {
    return <MainCont>
        <HeaderText fsize={fontsize} fweight={fontweight}>{header}</HeaderText>
    </MainCont>
}

export default Header;