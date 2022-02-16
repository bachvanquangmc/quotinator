import React, { useState } from 'react';
import styled from 'styled-components';

const MainCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #E5DED6;
    border: 1px solid #E5DED6;

    width: 120px;
    height: 140px;
`;

const Icon = styled.img`
    display: flex;
    width: 45px;
    height: 45px;
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
}) => {
    const [bgcol, setBgcol] = useState(false);

    
    return <MainCont onClick={()=>setBgcol(!bgcol)} bgcolor={bgcolor} bordercolor={bordercolor}>
        <Icon src={src}/>
        <Text fsize={fontsize}>{text}</Text>
    </MainCont>
}

export default TopicCard;