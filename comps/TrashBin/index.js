import React from "react";
import styled from "styled-components";
import { useState } from "react";

import { useDrag, useDrop } from "react-dnd";

const TrashCont = styled.div`
  display: flex;
  background: #ebd1d1;
  border-radius: 50%;
  z-index: 1;
  width: ${({ width }) => width || "70px"};
  heigh: 70px;
  margin: 20px;
  padding: 10px;
`;

const Trash = styled.img`
  width: 100%;
  height: 100%;
`;

const TrashBin = ({
  //props
  children = null,
  onDropItem = () => {},
}) => {

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "quotecard",
    drop: (item, monitor) => {
      console.log("quotecard that's dropped", item, item.id);
      onDropItem(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <TrashCont ref={drop} width={canDrop && isOver ? "100px" : "50px"}>
      <Trash
        src={
          canDrop && isOver ? "/trashbinopen-black.png" : "/trashbin-black.png"
        }
      />
      {children}
    </TrashCont>
  );
};

export default TrashBin;
