import React from "react";
import styled from "styled-components";
import { useState } from 'react';


import { useDrag, useDrop } from "react-dnd";

const TrashCont = styled.div`
  display: flex;
  background: #EBD1D1;
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

  const [trash, handleTrash] = useState(false);  

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: "quotecard",
    drop: (item, monitor) => {
      console.log("quotecard that's dropped", item, item.Author);

      onDropItem(item);
    },
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <TrashCont
      ref={drop}
      width={canDrop && isOver ? '100px' : '70px'}
    >
      <Trash 
        src={
          canDrop && isOver ? "/trashbinopen-black.png" : "/trashbin-black.png"
          
        }
        // src="/trashbin-black.png"
      />
      {children}
    </TrashCont>
  );
};

export default TrashBin;
