import React, { useState } from 'react';
import styled from 'styled-components';

const MainCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.bgcolor};
    border: 1px solid ${props => props.bordercolor};
    width: 120px;
    height: 140px;

`;

const Icon = styled.img`
    display: flex;
    width: 50px;
    height: 50px;
    margin-top: 15px;
    src: ${props => props.src};
`;

const Text = styled.p`
    display: flex;
    font-size: ${props => props.fsize};
`;

const TopicCard = ({
    text = "default",
    fontsize = "16px",
    src = "/TopicCardIcons/love.png",
    bgcolor = "#E5DED6",
    bordercolor = "#E5DED6",
    onClick = () => { }
}) => {


    // const handleClick = () => {
    //     setClick(backgroundColor="#fff")
    // }



    return <MainCont onClick={onClick} bgcolor={bgcolor} bordercolor={bordercolor}>
        <Icon src={src} />
        <Text fsize={fontsize}>{text}</Text>
    </MainCont>
}

export default TopicCard;