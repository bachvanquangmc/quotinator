import styled from 'styled-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const BtnCont = styled.button`
    display: flex;
    min-width: 288px;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: #7B9582; 
    border: none;
    cursor: pointer;
    margin: 20px;

    /* &:hover {
        background-color: #758B7B;
    }; */
`;

const BtnText = styled.p`
    display: flex;
    font-family: 'Inter', sans-serif;
    color: ${props => props.fontColor};
    font-size: 20px;
`;

const Btn = ({
    fColor = "#FFFFFF",
    text = "Sign Up",
    onClick = () => {}

}) => {
    const router = useRouter();

    return (
        <BtnCont onClick={onClick}>
            <BtnText fontColor={fColor}>
                {text}
            </BtnText>
        </BtnCont>
    )
}

export default Btn;