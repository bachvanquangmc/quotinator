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
var timer = null

var timer = null;
export default function results({}) {
  // const [datas, setDatas] = useState([]);
  const [data, setData] = useState([]);
//   const [cutpage, setCutPage] = useState(1);

//   const itemsPerPage = 10;
//   var butt_arr = [];

//   var start = 1;
//   for (var i = 1; i < 2000; i += itemsPerPage) {
//     butt_arr.push((i - 1) / itemsPerPage + 1);
//     start++;
//   }

//   butt_arr = butt_arr.slice(cutpage - 3 < 0 ? 0 : cutpage - 2, cutpage + 4);

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
      timer = setTimeout(async () => {
        console.log("async call");
        const res = await ax.get("/api/quotes", {
          params: {
            txt: txt,
            // page: p,
            // num: itemsPerPage,
          },
        });
        console.log(res.data);
        setData(res.data);
        // setCutPage(p);
        timer = null;
      }, 1000);
    }
  };

  return (
    <MainCont>
      <Navbar />
      <SubCont>
        <Header header="Results" />
        <SearchBar onChange={(e) => inputFilter(e.target.value)} />
        <SortTab />
      </SubCont>

      <QuotCont>
        {data.map((o, i) => (
          <QuoteCard
            key={i}
            text={o.Quote}
            subText={o.Author}
            
          />
        ))}

        <BtnCont>
          {butt_arr.map((o, i) => (
            <PageBtn onclick={() => inputFilter(o)} page_num={o} />
          ))}
        </BtnCont>
      </QuotCont>
    </MainCont>
  );
}
