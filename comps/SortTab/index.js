import styled from "styled-components";
import React, { useState } from "react";

const SortTabCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 15px 0px;
`;

const SortButton_Pop = styled.button`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.select ? "#fff" : "#C8BDB0")};
  box-shadow: ${(props) =>
    props.select ? "inset 1px 2px 5px rgba(0, 0, 0, 0.18)" :  "none"};
  border: none;
  cursor: pointer;

  /* &:hover {
        background-color: #758B7B;
        color: #FFF;
    }; */
`;

const SortButton_Aut = styled.button`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.unselect ? "#fff" : "#C8BDB0")};
  box-shadow: ${(props) =>
    props.unselect ? "inset 1px 2px 5px rgba(0, 0, 0, 0.18)" :  "none" };
  border: none;
  cursor: pointer;

  /* &:hover {
        background-color: #758B7B;
        color: #FFF;
    }; */
`;

const Text = styled.p`
  font-size: 16px;
  font-family: "Inter", sans-serif;
`;

const SortTab = ({setSBP, setSBPType, sbp, sbp_type, setSBA, setSBAType, sba, sba_type}) => {
  const [selected, setSelected] = useState(true);
  const [unselected, setUnselected] = useState(false);


  return (
    <SortTabCont>
      <SortButton_Pop
        select={selected}
        onClick={() => {
          setSelected(true);
          setUnselected(false);
          setSBP(!sbp)
          setSBPType(sbp_type === "asc" ? "desc" : "asc")
        }}
      >
        <Text>{sbp_type === "asc" ? "Popularity ↑" : "Popularity ↓"}</Text>
      </SortButton_Pop>
      <SortButton_Aut
        unselect={unselected}
        onClick={() => {
          setSelected(false);
          setUnselected(true);
          setSBA(!sba)
          setSBAType(sba_type === "asc" ? "desc" : "asc")
        }}
      >
        <Text>{sba_type === "asc" ? "Author (A-Z)" : "Author (Z-A)"}</Text>
      </SortButton_Aut>
    </SortTabCont>
  );
};

export default SortTab;
