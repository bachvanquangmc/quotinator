import styled from "styled-components";
import React, { useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDrag, useDrop } from "react-dnd";
import { useTheme, useFav } from "../../utils/provider";
import { global_theme } from "../../utils/variables";
// import { post } from "@/server/Routes/favs";

const QuoteCont = styled.div`
  display: flex;
  min-width: 350px;
  max-width: 400px;
  justify-content: center;
  background-color: ${(props) => props.bgcolor};
  font-family: "Inter", sans-serif;
  border: none;
  padding: 8px;
  margin: 20px 0px;
  cursor: pointer;
  ${({ op }) => op && `opacity:${op};`}
  ${({ position, left, top }) =>
    position === "absolute" &&
    `
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

const Savebtn = styled.button`
  background: rgba(0, 0, 0, 0);
  border: none;
  visibility: hidden;
`;

const QuoteCard = ({
  text = "Don't cry because it's over, smile because it happened.",
  subText = "Dr. Seuss",
  debug,
  children = null,
  item = {},
}) => {
  const { theme, setTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  const changeCopied = () => {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const [pos, setPos] = useState({
    left: 0,
    top: 0,
    position: "relative",
  });

  
  const [{ isDragging, coords }, drag, dragPreview] = useDrag(() => ({
    type: "quotecard",
    item,
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        setPos({
          left: monitor.getClientOffset().x,
          top: monitor.getClientOffset().y,
          position: "absolute",
        });
      }
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      coords: monitor.getClientOffset(),
    }),
  }));

  const style = {
    left: pos.left,
    top: pos.top,
    position: pos.position,
  };

  if (coords && isDragging) {
    style.left = coords.x + 10;
    style.top = coords.y;
    style.position = "absolute";
  }

  return (
    <QuoteCont
      bgcolor={global_theme[theme].card}
      ref={dragPreview}
      op={isDragging ? 0.5 : 1}
      left={style.left}
      top={style.top}
      position={style.position}
    >
      <TextCont ref={drag}>
        {children}
        <Text
          value={text}
          onChange={() => {
            setCopied(false);
          }}
        >
          "{text}"
        </Text>
        <SubText> - {subText}</SubText>
      </TextCont>
      <ImgCont>
        <Savebtn></Savebtn>

        <CopyToClipboard
          options={{ debug: debug, message: "" }}
          text={text}
          onCopy={() => setCopied(true)}
        >
          <Img
            title="Copy to clipboard"
            onClick={changeCopied}
            src={copied ? "/check.png" : "/copy.png"}
          />
        </CopyToClipboard>
      </ImgCont>
    </QuoteCont>
  );
};

export default QuoteCard;
