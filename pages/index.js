import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import styled from "styled-components";
import { useRouter, router } from "next/router";
import Btn from '../comps/Btn';
import Header from '../comps/Header'

const MainCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color: #F2F0EE;
  max-width: 375px;
  min-height: 812px;
  /* max-width:320px;
  min-height:630px; */
`;

const LogoCont = styled.div`
  display: flex;
  /* justify-content:center; */
  /* align-items: center; */
  width: 170px;
  height: 170px;
`;

const Logo = styled.img`
  width:100%;
  height: 100%;
  object-fit: contain;
`;

const LogoTitleCont = styled.h1`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 35px;
  margin-bottom: 5px;
`;

const HeadBtnCont = styled.h1`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 40px;
`;


export default function Home() {
  const router = useRouter();

  return (
    <MainCont>
      <LogoTitleCont>
        <LogoCont>
          <Logo src="/logo.svg"/>
        </LogoCont>
        <Title>"Quotinator"</Title>
      </LogoTitleCont>
      <HeadBtnCont>
        <Header header="Find your quote by..." fontsize="23px" margin="15px" ></Header>
        <Btn text="Search" onClick={() => router.push("/")}/>
        <Btn text="Filter by Category" onClick={() => router.push("/")}/>
      </HeadBtnCont>
    </MainCont>
  )
}
