import styled from 'styled-components';
import React, { useState } from 'react';
import { useTheme } from "../../utils/provider"
import { global_theme } from "../../utils/variables";


const QuoteCont = styled.div`
    display: flex;
    min-width: 350px;
    max-width: 400px;
    justify-content: center;
    background-color:${props => props.bgcolor};
    font-family: 'Inter', sans-serif;
    border: none;
    padding: 8px;
    margin: 20px 0px;
    ${({ op }) => op && `opacity:${op}`}
    ${({ position, left, top }) => position === 'absolute' && `
    left:${left}px;
    top:${top}px;
    position:${position};
    z-index: 2;
    `}
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
    width: 20px;
    height: 20px;
    object-fit: contain;
    cursor: pointer;
    margin-left: 20px;
    display: ${props=>props.img}
`;
const Num = styled.p`
  display: ${props=>props.num};
`

const PollCard = ({
    text = "Don't cry because it's over, smile because it happened.",
    subText = "Dr. Seuss",
    poll=poll,
    num='none',
    img="inline-block",
  

}) => {
    const { theme, setTheme } = useTheme()
    const [cardColor, setCardColor] = useState(false)
    const [count, setCount] = useState(0)

    const voteQuote = () => {
        setCardColor(!cardColor)
        if(cardColor===true){
            setCount(count - 1)
        } else{
            setCount(count + 1)
        }
       
    }
    return (
            <QuoteCont onClick={voteQuote} bgcolor={cardColor===false?global_theme[theme].card: '#fff'}>
                <TextCont>
                    <Text>"{text}"</Text>
                    <SubText> - {subText}</SubText>
                </TextCont>
                  <Img img={img} src='/x.png'/>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <Num num={num}>{count}</Num>
                </div>
            </QuoteCont>
        // </QuoteCont>
    )
}

export default PollCard;