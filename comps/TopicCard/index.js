import React, { useState } from "react";
import styled from "styled-components";

const MainCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.bgcolor};
  border: 1px solid ${(props) => props.bordercolor};
  width: 120px;
  height: 140px;
`;

const Icon = styled.img`
  display: flex;
  width: 45px;
  height: 45px;
  margin-top: 15px;
  src: ${(props) => props.src};
`;

const Text = styled.p`
  display: flex;
  font-size: ${(props) => props.fsize};
  color:black;
`;

const TopicCard = ({
  text = "default",
  fontsize = "16px",
  src = "/TopicCardIcons/love.png",
  bordercolor = "#E5DED6",

  // onClick = () => { }
}) => {
  // const handleClick = () => {
  //     setClick(backgroundColor="#fff")
  // }

  const [bgColor, setBgColor] = useState("#E5DED6");

  const changeBgColor = () => {
    if (bgColor == "white") {
      setBgColor("#E5DED6");
    } else if (bgColor == "#E5DED6") {
      setBgColor("white");
    }
  };

  return (
    <MainCont
      onClick={changeBgColor}
      bordercolor={bordercolor}
      bgcolor={bgColor}
    >
      <Icon src={src} />
      <Text fsize={fontsize}>{text}</Text>
    </MainCont>
  );
};

export default TopicCard;
