import react, { useEffect, useState } from "react";
import styled from "styled-components";
import ax from "axios";

import Navbar from "../comps/Navbar";
import Header from "../comps/Header";
import SearchBar from "../comps/SearchBar";
import SortTab from "../comps/SortTab";
import QuoteCard from "../comps/QuoteCard";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  background-color: #f2f0ee;
`;

const SubCont = styled.div`
  margin: 20px;
`;

const QuotCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function results() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getQuotes = async () => {
      const resp = await ax.get("/api/quotes");
      setData(resp.data);
    };

    getQuotes();
  }, []);

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
            <QuoteCard text={o.Quote} subText={o.Author} />
          </div>
        ))}
      </QuotCont>
    </MainCont>
  );
}
