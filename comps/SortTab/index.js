import styled from 'styled-components';
import React, { useState } from 'react';

const SortTabCont = styled.div`
    display: flex;
    width: 316px;
    justify-content: center;
    align-items: center;
    border: none;
    /* padding: 5px; */
    margin: 15px 0px;
`;

const SortButton = styled.button`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.background};
    box-shadow: ${props => props.boxShadow};
    border: none;
    cursor: pointer;

    /* &:hover {
        background-color: #758B7B;
        color: #FFF;
    }; */
`;

const Text = styled.p`
    font-size: 16px;
    font-family: 'Inter', sans-serif;
`;


const SortTab = ({
    background = "#FFF",
    boxShadow = "inset 1px 2px 5px rgba(0, 0, 0, 0.18)",
    text = "popular",
    // onClick = () => {}
}) => {
    return <SortTabCont>
        <SortButton
            background={background}
            boxShadow={boxShadow}
            // onClick={onClick}
        >
            <Text>Popular</Text>
        </SortButton>
        <SortButton
            background="#C8BDB0"
            boxShadow="none"
            // onClick={onClick}
        >
            <Text>Authors</Text>
        </SortButton>
    </SortTabCont>
}

export default SortTab;