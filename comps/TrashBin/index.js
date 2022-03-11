import React from "react";
import styled from "styled-components";

import { useDrag, useDrop } from 'react-dnd';

const TrashCont = styled.div`
    display: flex;
    /* background:${({bg})=>bg || 'aqua'}; */
    z-index: 1;
`;

const Trash = styled.img`
    width: 45px;
    height: 45px;
    /* src:${({src})=>src}; */
`;

const TrashBin = ({
    //props
}) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'quotecard',
        drop: (item, monitor) => {
            console.log("quotecard that's dropped", item)
        },
        // Props to collect
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }))

    return <TrashCont
        ref={drop}
        // bg={canDrop && isOver ? 'pink' : 'aqua'}
    >
        <Trash /*img src="/trashbin-black.png"*/
        src={canDrop && isOver ? '/trashbinopen-black.png' : '/trashbin-black.png'}
        
        />
    </TrashCont>
}


export default TrashBin;