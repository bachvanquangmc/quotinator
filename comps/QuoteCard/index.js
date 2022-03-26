import styled from "styled-components";
import React, { useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDrag, useDrop } from "react-dnd";
import { useTheme, useFav } from "../../utils/provider";
import { global_theme } from "../../utils/variables";

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

const Savebtn = styled.div`
  background: rgba(0, 0, 0, 0);
  border: none;
  width:50px;
  height: 50px;
`;

const QuoteCard = ({
  text = "Don't cry because it's over, smile because it happened.",
  subText = "Dr. Seuss",
  debug,
  onChange,
  saveBtn=()=>{},
  poll=poll,
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


  const changeCopied = () => {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (

    <QuoteCont bgcolor={global_theme[theme].card}>
      <TextCont>
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
        >
          <label style={{display: poll === false ? "inline-block" : "none"}}>
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
  
        <Savebtn
          onClick={saveBtn}
        >
        <div style={{display: poll === false ? "inline-block" : "none"}}>
                        <CopyToClipboard
                            options={{ debug: debug, message: "" }}
                            text={text}
                            onCopy={() => setCopied(true)}
                        >
                            <Img title='Copy to clipboard' onClick={changeCopied} src={copied ? "/check.png" : "/copy.png"} />
                        </CopyToClipboard>
                    </div>
                    <label>
                    <div style={{display: poll === true ? "inline-block" : "none"}}>
                        <input type="checkbox"
                            checked={checked}
                            onChange={onChange}
                            style={{ display: "none" }}
                        />
                         <Img
              title="Add to favorite"
              src={click ? "/checked.png" : "/unchecked.png"}
              onClick={() => setClick(!click)}
            />
                    </div>
                    </label>
                    </Savebtn>

            
      </ImgCont>
    </QuoteCont>
  );
};

export default QuoteCard;

