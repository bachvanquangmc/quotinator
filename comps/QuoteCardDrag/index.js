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
  ${({ op }) => op && `opacity:${op}`}
  ${({ position, left, top }) =>
    position === "fixed" &&
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

const Savebtn = styled.button`
  background: rgba(0, 0, 0, 0);
  border: none;
`;

const QuoteCard = ({
  text = "Don't cry because it's over, smile because it happened.",
  subText = "Dr. Seuss",
  debug,
  onChange,
  saveBtn = () => {},

  // imgSrc = "/heart_outline.png" ,
  onclick = () => {},

  children = null,
  item = {},
}) => {
  const { theme, setTheme } = useTheme();
  const { fav, setFav } = useFav();

  const [click, setClick] = useState(false);
  const [copied, setCopied] = useState(false);
  const [checked, setChecked] = useState(false);

  // const StoreFav = (checked, obj)  => {
  //   console.log(checked, obj)
  //   if(checked){
  //     const new_fav = {
  //       ...fav,
  //     };
  //     new_fav[obj.Quote] = obj;
  //     setFav(new_fav);
  //   } else {
  //     const new_fav = {
  //       ...fav,
  //     };
  //     delete new_fav[obj.Quote];
  //     setFav(new_fav);
  //   }
  // };

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
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: "quotecard",
    item,
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.

    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        setPos({
          left: monitor.getClientOffset().x,
          top: monitor.getClientOffset().y,
          position: "fixed",
        });
      }
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      coords: monitor.getClientOffset(),
    }),
  }));

  // console.log(coords);

  const style = {
    left: pos.left,
    top: pos.top,
    position: pos.position,
  };

  if (coords && isDragging) {
    style.left = coords.x + 10;
    style.top = coords.y;
    style.position = "fixed";
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
        <Savebtn
          onClick={saveBtn}
          // onChange={onChange}
        >
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={onChange}
              style={{ display: "none" }}
            />
            <Img
              title="Add to favorite"
              src={click ? "/heart.png" : "/heart_outline.png"}
              onClick={() => setClick(!click)}
            />
          </label>
        </Savebtn>

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
    // </QuoteCont>
  );
};

export default QuoteCard;
