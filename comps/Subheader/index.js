import react from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-size: ${props=>props.fontSize}px;
    font-variant: ${props=>props.fontVar};
`;

const Subheader = ({
    fontSize="14",
    fontVar="normal",
    subheader="Default"

}) => {
    return <div>
        <Text
            fontSize={fontSize}
            fontVar={fontVar}
        >{subheader}</Text>
    </div>
};

export default Subheader;