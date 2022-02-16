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

  const [bgColor, setBgColor] = useState("pink");

  const changeBgColor = () => {
    if (bgColor == "blue") {
      setBgColor("pink");
    } else if (bgColor == "pink") {
      setBgColor("blue");
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
