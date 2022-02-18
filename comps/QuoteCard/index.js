import styled from 'styled-components';
import React, { useState } from 'react';

const QuoteCont = styled.div`
    display: flex;
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
    margin: 2px 2px 2px 10px;
`;

const Img = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
    cursor: pointer;
`;


const QuoteCard = ({
    width = 316,
    text = "Don't cry because it's over, smile because it happened.",
    subText = "Dr. Seuss",
    imgSrc = "/heart.png" ,
    imgSrc2 = "/copy.png" ,
    // onClick = () => {}
}) => {

    return (
        <QuoteCont>
            <TextCont>
                <Text>"{text}"</Text>
                <SubText> - {subText}</SubText>
            </TextCont>
            <ImgCont>
                <Img src={imgSrc}/>
                <Img src={imgSrc2}/>
            </ImgCont>
        </QuoteCont>
    )
}

export default QuoteCard;