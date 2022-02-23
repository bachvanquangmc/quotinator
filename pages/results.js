import react, { useEffect, useState } from "react";
import styled from "styled-components";
import ax from "axios";

import Navbar from "../comps/Navbar";
import Header from "../comps/Header";
import SearchBar from "../comps/SearchBar";
import SortTab from "../comps/SortTab";
import QuoteCard from "../comps/QuoteCard";
import PageBtn from "../comps/PageBtn";

import { useRouter } from "next/router";
import { useData } from "@/utils/provider";
import { v4 as uuidv4 } from "uuid";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  background-color: #f2f0ee;
  min-height: 100vh;
`;

const SubCont = styled.div`
  margin: 20px;
`;

const QuotCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Test = styled.div`
  flex-basis: 60%;
`;

const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100vw;
`;

var timer = null;
export default function results() {

  const [data, setData] = useState([]);
  const [cutpage, setCutPage] = useState(1);

  const [sbp, setSBP] = useState(false);
  const [sbp_type, setSBPType] = useState("asc");
  const [sba, setSBA] = useState(false);
  const [sba_type, setSBAType] = useState("asc");

  const r = useRouter();

  const itemsPerPage = 10;
  var butt_arr = [];

  var start = 1;
  for (var i = 1; i < 20000; i += itemsPerPage) {
    butt_arr.push((i - 1) / itemsPerPage + 1);
    start++;
  }

  butt_arr = butt_arr.slice(cutpage - 3 < 0 ? 0 : cutpage - 2, cutpage + 4);

  // const getQuotes = async (p) => {
  //   const res = await ax.get("/api/quotes", {
  //     params: {
  //       page: p,
  //       num: itemsPerPage,
  //     },
  //   });
  //   console.log(res.data);
  //   setData(res.data);
  //   setCutPage(p);
  // };

  //search by authors
  const inputFilter = async (txt) => {
    console.log(txt);

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (timer === null) {
      timer = setTimeout(async (p) => {
        console.log("async call");
        const res = await ax.get("/api/quotes", {
          params: {
            txt: txt,
            page: p,
            num: itemsPerPage,
          },
        });
        console.log(res.data);
        setData(res.data);
        setCutPage(p);
        timer = null;
      }, 500);
    }
  };

  // const cutPages = async(p) => {
  //   const res = await inputFilter(txt, {
  //     params: {
  //       page: p,
  //       num: itemsPerPage,
  //     },
  //   });
  //   console.log(res.data);
  //   set
  // }


  return (
    <MainCont>
      <Navbar />
      <SubCont>
        <Header header="Search Your Quote" />
        <SearchBar onChange={(e) => inputFilter(e.target.value)} />
        <SortTab
        setSBPType={setSBPType}
        setSBP={setSBP}
        sbp={sbp}
        sbp_type={sbp_type}
        setSBAType={setSBAType}
        setSBA={setSBA}
        sba={sba}
        sba_type={sba_type}
      />
      </SubCont>

      <QuotCont>
        {data.map((o, i) => (
          <QuoteCard
            key={i}
            text={o.Quote}
            subText={o.Author}
        
          />
        ))}
        {/* <BtnCont>
          {butt_arr.map((o, i) => (
            <PageBtn 
            // style={{ background: o === cutpage ? "pink" : "white" }}
            // bgColor={{ background: o === cutpage ? "#7b9582" : "white"}}
            onclick={() => getQuotes(o)} page_num={o} />
          ))}
        </BtnCont> */}

      </QuotCont>
    </MainCont>
  );
}
