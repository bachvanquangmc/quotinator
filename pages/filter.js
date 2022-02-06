import React from 'react';
import styled from 'styled-components';

import Navbar from '../comps/Navbar';
import Header from '../comps/Header';
import Subheader from '../comps/Subheader';
import TopicCard from '../comps/TopicCard';
import SearchBar from '../comps/SearchBar';
import Btn from '../comps/Btn';

const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F2F0EE;
    height: 100%;
    padding: 5%;
`;

const TCMainCont = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CardCont = styled.div`
    display: flex;
    margin: 15px 30px 15px 0px;
`;



export default function Filter() {
    return <MainCont>
        <Header header="Select a Category" />
        <TCMainCont>
            <CardCont>
                <TopicCard text="Humor" src="/TopicCardIcons/humor.png" />
            </CardCont>
            <CardCont>
                <TopicCard text="Life" src="/TopicCardIcons/life.png" />
            </CardCont>
            <CardCont>
                <TopicCard text="Success" src="/TopicCardIcons/success.png" />
            </CardCont>
            <CardCont>
                <TopicCard text="Inspirational" src="/TopicCardIcons/inspirational.png" />
            </CardCont>
            <CardCont>
                <TopicCard text="Religion" src="/TopicCardIcons/religion.png" />
            </CardCont>
            <CardCont>
                <TopicCard text="Love" src="/TopicCardIcons/love.png" />
            </CardCont>
            <CardCont>
                <TopicCard text="Philosophy" src="/TopicCardIcons/philosophy.png" />
            </CardCont>
            <CardCont>
                <TopicCard text="Books" src="/TopicCardIcons/books.png" />
            </CardCont>
            <CardCont>
                <TopicCard text="Death" src="/TopicCardIcons/death.png" />
            </CardCont>
            <CardCont>
                <TopicCard text="Hope" src="/TopicCardIcons/hope.png" />
            </CardCont>
            <CardCont>
                <TopicCard text="Wisdom" src="/TopicCardIcons/wisdom.png" />
            </CardCont>
            <CardCont>
                <TopicCard text="Art" src="/TopicCardIcons/art.png" />
            </CardCont>
        </TCMainCont>
    </MainCont>
}