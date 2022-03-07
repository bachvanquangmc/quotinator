import React from "react";
import styled from "styled-components";


const TrashCont = styled.div`
    display: flex;
`;

const Trash = styled.img`
    width: 45px;
    height: 45px;
`;

const TrashBin = () => {

return <TrashCont>
    <Trash img src="/trashbin-black.png"/>
</TrashCont>
}


export default TrashBin;