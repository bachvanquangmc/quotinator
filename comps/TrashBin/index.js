import React from "react";
import styled from "styled-components";
import { useState } from 'react';


import { useDrag, useDrop } from "react-dnd";

const TrashCont = styled.div`
  display: flex;
  /* background:${({ bg }) => bg || "aqua"}; */
  z-index: 1;
`;

const Trash = styled.img`
  width: 45px;
  height: 45px;
//   src:${(props) => (props.src ? "/trashbinopen-black.png" : "/trashbin-black.png")}; 
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
      console.log("quotecard that's dropped", item);

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
      bg={canDrop && isOver ? 'pink' : 'aqua'}
    >
      <Trash 
        // src={
        //   canDrop && isOver ? "/trashbinopen-black.png" : "/trashbin-black.png"
            // handleTrash
        // }
        src="/trashbin-black.png"
      />
      {children}
    </TrashCont>
  );
};

export default TrashBin;
