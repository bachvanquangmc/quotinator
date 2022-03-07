import styled from 'styled-components';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useDrag, useDrop } from 'react-dnd';

const QuoteCont = styled.div`
    display: flex;
    min-width: 350px;
    max-width: 400px;
    justify-content: center;
    background-color: #E5DED6;
    font-family: 'Inter', sans-serif;
    border: none;
    padding: 8px;
    margin: 20px 0px;
    ${({ op }) => op && `opacity:${op}`}
    ${({position, left, top})=>position === 'absolute' && `
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
    width: 30px;
    height: 30px;
    object-fit: contain;
    cursor: pointer;
`;

const QuoteCard = ({
    text = "Don't cry because it's over, smile because it happened.",
    subText = "Dr. Seuss",
    debug,
    onChange,
    checked,
    // imgSrc = "/heart_outline.png" ,
    onclick = () => { },

    children = null,
    item={}
}) => {

    const [click, setClick] = useState(false)
    const [copied, setCopied] = useState(false);

    const changeCopied = () => {
        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }

    const [{ isDragging, coords }, drag, dragPreview] = useDrag(() => ({
        // "type" is required. It is used by the "accept" specification of drop targets.
        type: 'quotecard',
        item: item,
        // The collect function utilizes a "monitor" instance (see the Overview for what this is)
        // to pull important pieces of state from the DnD system.

        // end: (item, monitor) => {
        //   if(!monitor.didDrop()){
        //     setPos({
        //       left: monitor.getClientOffset().x,
        //       top: monitor.getClientOffset().y,
        //       position: 'fixed'
        //     })
        //   }
        // },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            coords: monitor.getClientOffset()
        })
    }))

    // console.log(coords);

    const style = {
        left: null,
        top: null,
        position: null,
    }

    if(coords && isDragging) {
        style.left = coords.x + 10;
        style.top = coords.y;
        style.position = 'absolute';
    }


    return (
        <QuoteCont ref={dragPreview}
            op={isDragging ? 0.5 : 1}
            left={style.left}
            top={style.top}
            position={style.position}
        >
            <div ref={drag}>
                {children}
            </div>

            <TextCont>
                <Text
                    value={text}
                    onChange={() => {
                        setCopied(false);
                    }}
                >"{text}"</Text>
                <SubText> - {subText}</SubText>
            </TextCont>
            <ImgCont>
                <span>

                    <Img title='Add to favorite' src={click ? "/heart.png" : "/heart_outline.png"} onClick={() => setClick(!click)}>

                    </Img>
                    <span>
                        <input type="checkbox"
                            checked={checked}
                            onChange={onChange}
                        // style={{visibility:"hidden"}}
                        />
                    </span>
                </span>
                <CopyToClipboard
                    options={{ debug: debug, message: "" }}
                    text={text}
                    onCopy={() => setCopied(true)}
                >
                    <Img title='Copy to clipboard' onClick={changeCopied} src={copied ? "/check.png" : "/copy.png"} />
                </CopyToClipboard>
            </ImgCont>
        </QuoteCont>
    )
}

export default QuoteCard;