import react, { useEffect, useState } from "react";
import styled from "styled-components";
import ax from "axios";
import Navbar from "../comps/Navbar";
import Header from "../comps/Header";
import SearchBar from "../comps/SearchBar";
import SortTab from "../comps/SortTab";
import QuoteCard from "../comps/QuoteCard";
import PageBtn from "../comps/PageBtn";
import router from "next/router";
import { useRouter } from "next/router";
import { useData } from "@/utils/provider";
import { useFav, useQuoteData } from "@/utils/provider";
import { filtering } from "@/utils/func";
import { v4 as uuidv4 } from "uuid";
import Btn from "@/comps/Btn";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
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

const NavBarCont = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export default function Results() {

  useEffect(()=>{
      const getQts = async () => {
        const res = await ax.get("/api/quote")
        if(res.data !== false) {
          setQuoteData(res.data);
        }
      };
      getQts();
  }, []);

  const [data, setData] = useState([]);
  const [currpage, setCurrPage] = useState(1);
  const [sbp, setSBP] = useState(false);
  const [sbp_type, setSBPType] = useState("asc");
  const [sba, setSBA] = useState(false);
  const [sba_type, setSBAType] = useState("asc");
  const router = useRouter();

  const { fav, setFav } = useFav();
  const { quoteData, setQuoteData } = useQuoteData({});



  const itemsPerPage = 10;
  var butt_arr = [];

  var start = 1;
  for (var i = 1; i < 2000; i += itemsPerPage) {
    butt_arr.push((i - 1) / itemsPerPage + 1);
    // start++;
  }

  butt_arr = butt_arr.slice(currpage - 3 < 0 ? 0 : currpage - 2, currpage + 4);


  const StoreFav = (checked, obj) => {
    console.log(checked, obj);
    if (checked) {
      const new_fav = {
        ...fav,
      };
      new_fav[obj.Quote] = obj;
      setFav(new_fav);
    } else {
      const new_fav = {
        ...fav,
      };
      delete new_fav[obj.Quote];
      setFav(new_fav);
    }
  };

  return (
    <MainCont>
      <NavBarCont>
        <Navbar goBack={() => router.push("/")} />
      </NavBarCont>
      <SubCont>
        <Header header="Search Your Quote" />
        {/* <SearchBar onChange={(e) => inputFilter(e.target.value)} /> */}
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
        {quoteData && Object.values(quoteData).map((o, i) => (
          <>
          {/* <input type="checkbox" 
          checked={fav[o.Quote] !== undefined && fav[o.Quote] !== null}
          onChange={
            (e)=>StoreFav(e.target.checked, o)
          }/> */}
          <QuoteCard
            key={i}
            text={o.Quote}
            subText={o.Author}
            checked={fav[o.Quote] !== undefined && fav[o.Quote] !== null}
            onChange={
            (e)=>StoreFav(e.target.checked, o)
          }
          />
          </>
          
        ))}
       
         <BtnCont>
          {butt_arr.map((o, i) => (
            <div key={i}>

              <PageBtn 
              // style={{ background: o === cutpage ? "pink" : "white" }}
              // bgColor={{ background: o === cutpage ? "#7b9582" : "white"}}
              onclick={() => getQuotes(o)} page_num={o} />
            </div>
          ))}
        </BtnCont>
        <Btn onClick={()=>router.push(`/saved/${uuidv4()}`)} text="Go to Favorite"/>
        {/* <button onClick={()=>router.push(`/saved/${uuidv4()}`)}>Go to fav</button> */}
      </QuotCont>
    </MainCont>
  );
}
