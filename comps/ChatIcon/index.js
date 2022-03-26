import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const ChatIconCont = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 25px;
  margin: 25px 0px;
  /* position: relative; */
`;

const ChatImg = styled.img`
  display: flex;
  width: 80px;
  height: 80px;
  object-fit: contain;
  cursor: pointer;
  visibility: ${(props) => props.visibility};
  margin: 0px 40px;

  /* width: 100%;
    position: absolute;
    top: 100px;
    left: 200px;
    z-index: 1; */
`;

const ChatIcon = ({ visibility = "hidden", onClick = () => {} }) => {
  const router = useRouter();
  return (
    <ChatIconCont>
      <ChatImg
        src="/speech-bubble.png"
        visibility={"visible"}
        onClick={onClick}
      />
    </ChatIconCont>
  );
};

export default ChatIcon;
