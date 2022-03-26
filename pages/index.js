import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter, router } from "next/router";
import ax from "axios";

import { useTheme, useQuoteData, useSBP } from "../utils/provider";
import { global_theme } from "../utils/variables";

import Btn from "../comps/Btn";
import Header from "../comps/Header";
import Subheader from "../comps/Subheader";
import SearchBar from "@/comps/SearchBar";
import Navbar from "@/comps/Navbar";
import { useTxt } from "../utils/provider";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  // background-color: #F2F0EE;
  height: 100vh;
  width: 100%;


`;

const LogoCont = styled.div`
  display: flex;
  width: 170px;
  height: 170px;
  margin: 20px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: ${(props) => props.filter};
`;

const LogoTitleCont = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 35px;
  margin-bottom: 5px;
`;

const HeadBtnCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
`;

const NavBarCont = styled.div`
  position: -webkit-sticky;
  position: absolute;
  top: 0;
  width: 100%;
`;

var timer = null;

export default function Home() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { quoteData, setQuoteData } = useQuoteData();
  const { txt, setTxt } = useTxt();
  const {sbp, setSBP} = useSBP()


  const inputFilter = async (txt) => {
    console.log(txt);
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (timer === null) {
      timer = setTimeout(async () => {
        const res = await ax.get("/api/quotes", {
          params: {
            txt: txt,
            sort_popularity: sbp,
          },
        });
        console.log(res.data);
        setQuoteData(res.data);
        setTxt(txt);
        timer = null;
      }, 100);
    }
  };

  const GoToResult = (e) => {
    if (e.key === "Enter") {
      setQuoteData(quoteData);
      router.push("/results");
    }
  };

  return (
    <MainCont>
      <NavBarCont>
        <Navbar goBack={() => router.push("/")} visible="hidden" />
      </NavBarCont>
      <LogoTitleCont>
        <LogoCont>
          <Logo filter={global_theme[theme].filter} src="/logo.svg" />
        </LogoCont>
        <Title>&ldquo;Quotinator&rdquo;</Title>
      </LogoTitleCont>
      <HeadBtnCont>
        <Subheader subheader="Find your quote by..." fontSize="22" />
        <SearchBar
          onChange={(e) => inputFilter(e.target.value)}
          onKeyPress={GoToResult}
        />
        <Btn text="Filter by Category" onClick={() => router.push("/filter")} />
      </HeadBtnCont>
    </MainCont>
  );
}
