import react from 'react';
import styled from 'styled-components';

const MainCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #E5DED6;
    width: 140px;
    height: 160px;
`;

const Icon = styled.img`
    display: flex;
    width: 60px;
    height: 60px;
    src: ${props =>props.src};
`;

const Text = styled.p`
    display: flex;
    font-size: ${props => props.fsize};
`;

const TopicCard = ({
    text = "default",
    fontsize = "18px",
    src="/TopicCardIcons/love.png"
}) => {
    return <MainCont>
        <Icon src={src}/>
        <Text fsize={fontsize}>{text}</Text>
    </MainCont>
}

export default TopicCard;