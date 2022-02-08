import styled from 'styled-components';
import React, { useState } from 'react';

const QuoteCont = styled.div`
    display: flex;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    justify-content: center;
    background-color: #E5DED6;
    font-family: 'Inter', sans-serif;
    border: none;
    padding: 8px;
    margin: 20px 0px;
`;

const TextCont = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 80%;
    justify-content: flex-start;
    align-items: flex-start;
    color: #000;
    /* padding: 5px; */
`;

const Text = styled.p`
    display: flex;
    font-size: 16px;
    margin: 5px;
`;

const SubText = styled.p`
    display: flex;
    font-size: 14px;
    font-style: italic;
    margin: 5px;
`;

const ImgCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
`;

const Img = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
    cursor: pointer;
`;


const QuoteCard = ({
    width = 316,
    height = 105,
    text = "Don't cry because it's over, smile because it happened.",
    subText = "Dr. Seuss",
    imgSrc = "/heart.png" ,
    // onClick = () => {}
}) => {

    return (
        <QuoteCont
            width={width}
            height={height}
        >
            <TextCont>
                <Text>"{text}"</Text>
                <SubText> - {subText}</SubText>
            </TextCont>
            <ImgCont>
                <Img src={imgSrc}/>
                <Img src={imgSrc}/>
            </ImgCont>
        </QuoteCont>
    )
}

export default QuoteCard;