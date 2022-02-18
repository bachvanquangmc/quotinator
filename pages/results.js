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
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
`;
const Test = styled.div`
flex-basis:60%;
`


const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export default function results() {

  const [data, setData] = useState([]);
  const [cutpage, setCutPage] = useState(1);

  const itemsPerPage = 10;
  var butt_arr = [];

  var start = 1;
  for (var i = 1; i < 2000; i += itemsPerPage) {
    butt_arr.push((i - 1) / itemsPerPage + 1);
    start++;
  }

  butt_arr = butt_arr.slice(cutpage - 3 < 0 ? 0 : cutpage - 2, cutpage + 4);

  const getQuotes = async (p) => {
    const res = await ax.get("/api/quotes", {
      params: {
        page: p,
        num: itemsPerPage,
      },
    });
    console.log(res.data);
    setData(res.data);
    setCutPage(p);
  };

  const SaveQuote = async() => {
    const res = await ax.post('/api/save', {
        uuid,
        fav
    });
};

  return (
    <MainCont>
      <Navbar />
      <SubCont>
        <Header header="Results" />
        <SearchBar />
        <SortTab />
      </SubCont>

      <QuotCont>
        {data.map((o, i) => (

          <div key={i}>
            <QuoteCard text={o.Quote} subText={o.Author} onclick={SaveQuote}/>
          </div>
          <Test key={i}>
            <QuoteCard  text={o.Quote} subText={o.Author} />
          </Test>
       ))}
        <BtnCont>
          {butt_arr.map((o,i) => 
            <PageBtn
              onclick={()=>getQuotes(o)}
              page_num={o}
            />
          )}
        </BtnCont>
      </QuotCont>

    </MainCont>
  );
}
