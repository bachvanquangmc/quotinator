import React from 'react';
import styled from 'styled-components';

const MainCont = styled.div`
    display: flex;
`;

const HeaderText = styled.h1`
    display: flex;
`;

const Header = ({
    header="Default"
}) => {
    return <MainCont>
        <HeaderText>{header}</HeaderText>
    </MainCont>
}

export default Header;