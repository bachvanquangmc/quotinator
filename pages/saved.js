import React from 'react';
import styled from "styled-components";
import Navbar from '../comps/Navbar';
import Header from '../comps/Header'
import Subheader from '../comps/Subheader'
import QuoteCard from '../comps/QuoteCard';
import PageBtn from '../comps/PageBtn';
import TrashBin from '../comps/TrashBin';
import { router, useRouter } from 'next/router';

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


const MainCont = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: space-between;
min-height: 100vh;
`;

const HeaderCont = styled.div`
display: flex;
/* flex-basis: 20%; */
flex-direction:column;
/* justify-content:center; */
/* align-items: flex-start; */
/* min-width: 320px; */
margin: 20px;
`;

const QuoteCont = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

const FooterCont = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin: 20px 0px;
`;

const NavBarCont = styled.div`
position: -webkit-sticky;
position: sticky;
top: 0;
`;

const TrashCont = styled.div`
    display: flex;
`;


export default function Saved() {
    const router = useRouter()
    return (
        <MainCont>
            <NavBarCont>
                <Navbar goBack={() => router.push('/')} />
            </NavBarCont>
            <HeaderCont>
                <Header header="Saved" />
                <Subheader subheader="Favorite stored quotes" />
            </HeaderCont>

            <QuoteCont>
                <QuoteCard imgSrc="/heart_outline_blk.png" />
                <QuoteCard imgSrc="/heart_outline_blk.png" />
            </QuoteCont>

            <TrashCont>
                <TrashBin />
            </TrashCont>

            <FooterCont>
                <PageBtn />
            </FooterCont>
        </MainCont>
    )
}
