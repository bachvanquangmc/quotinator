import React, { useState } from 'react';
import styled from 'styled-components';
import ax from 'axios';
import Navbar from '../comps/Navbar';
import Header from '../comps/Header';
import Subheader from '../comps/Subheader';
import TopicCard from '../comps/TopicCard';
import SearchBar from '../comps/SearchBar';
import Btn from '../comps/Btn';
import QuoteCard from '@/comps/QuoteCard';
import SortTab from '@/comps/SortTab';
import { v4 as uuidv4 } from "uuid";
import { useFav } from "@/utils/provider";

import PageBtn from "../comps/PageBtn";


import Switch from "../comps/Switch";
import { useRouter } from "next/router";
import { useQuoteData } from "../utils/provider";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  min-height: 100vh;
`;

const TCMainCont = styled.div`
  display: flex;
//   justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding:2rem;
  
`;

const QuoteCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    // flex-basis:70%;

`;

const CardCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 30px; */
  margin: 30px 40px 10px 0px;
`;

const NavBarCont = styled.div`
position: -webkit-sticky;
position: sticky;
top: 0;
`
const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100vw;
`;

export default function Filter() {
  const [humor, setHumor] = useState(null);
  const [life, setLife] = useState(null);
  const [success, setSuccess] = useState(null);
  const [inspirational, setInspirational] = useState(null);
  const [religion, setReligion] = useState(null);
  const [love, setLove] = useState(null);
  const [philosophy, setPhilosophy] = useState(null);
  const [books, setBooks] = useState(null);
  const [death, setDeath] = useState(null);
  const [hope, setHope] = useState(null);
  const [wisdom, setWisdom] = useState(null);
  const [art, setArt] = useState(null);
  const [value, setValue] = useState(false);

  //sorting
  const [sbp, setSBP] = useState(false);
  const [sbp_type, setSBPType] = useState("asc");
  const [sba, setSBA] = useState(false);
  const [sba_type, setSBAType] = useState("asc");

  const [cutpage, setCutPage] = useState(1);

  const r = useRouter();
  
  const {fav, setFav} = useFav()
  const { quoteData, setQuoteData } = useQuoteData({});


  const itemsPerPage = 10;
  var butt_arr = [];

  var start = 1;
  for (var i = 1; i < 20000; i += itemsPerPage) {
    butt_arr.push((i - 1) / itemsPerPage + 1);
    start++;
  }

  butt_arr = butt_arr.slice(cutpage - 3 < 0 ? 0 : cutpage - 2, cutpage + 4);

  const getQuotes = async (p) => {
    const res = await ax.get("./api/quotes", {
      params: {
        humor: humor,
        life: life,
        success: success,
        inspirational: inspirational,
        religion: religion,
        love: love,
        philosophy: philosophy,
        books: books,
        death: death,
        hope: hope,
        wisdom: wisdom,
        art: art,
        sort_popularity: sbp,
        sort_popularity_type: sbp_type,
        sort_author: sba,
        sort_author_type: sba_type,
        page: p,
        num: itemsPerPage
      },
    });
    console.log(res.data);
    console.log(p);
    setQuoteData(res.data);
    setCutPage(p)
  };

  const StoreFav = (checked, obj)  => {
    console.log(checked, obj)
    if(checked){
      const new_fav = {
        ...fav
      }
      new_fav[obj.Quote] = obj
      setFav(new_fav)
    } else {
      const new_fav = {
        ...fav
      }
      delete new_fav[obj.Quote]
      setFav(new_fav)
    }
  }
    return (
      <MainCont>
          <NavBarCont>
            <Navbar goBack={()=>r.push('/')}/>
          </NavBarCont>

        <Header header="Select a Category" />

        <TCMainCont>
            {/* <CardCont onClick={()=> setOptions("humor")} > */}
            <CardCont onClick={()=> setHumor(humor ? null : "humor")}>
                <TopicCard text="Humor" src="/TopicCardIcons/humor.png" />
            </CardCont>
            <CardCont onClick={()=> setLife(life ? null : "life")}>
                <TopicCard text="Life" src="/TopicCardIcons/life.png" />
            </CardCont>
            <CardCont onClick={()=> setSuccess(success ? null : "success")}>
                <TopicCard text="Success" src="/TopicCardIcons/success.png" />
            </CardCont>
            <CardCont onClick={()=> setInspirational(inspirational ? null : "inspirational")}>
                <TopicCard text="Inspirational" src="/TopicCardIcons/inspirational.png" />
            </CardCont>
            <CardCont onClick={()=> setReligion(religion ? null : "religion")}>
                <TopicCard text="Religion" src="/TopicCardIcons/religion.png" />
            </CardCont>
            <CardCont onClick={()=> setLove(love ? null : "love")}>
                <TopicCard text="Love" src="/TopicCardIcons/love.png" />
            </CardCont>
            <CardCont onClick={()=> setPhilosophy(philosophy ? null : "philosophy")}>
                <TopicCard text="Philosophy" src="/TopicCardIcons/philosophy.png" />
            </CardCont>
            <CardCont onClick={()=> setBooks(books ? null : "books")}>
                <TopicCard text="Books" src="/TopicCardIcons/books.png" />
            </CardCont>
            <CardCont onClick={()=> setDeath(death ? null : "death")}>
                <TopicCard text="Death" src="/TopicCardIcons/death.png" />
            </CardCont>
            <CardCont onClick={()=> setHope(hope ? null : "hope")}>
                <TopicCard text="Hope" src="/TopicCardIcons/hope.png" />
            </CardCont>
            <CardCont onClick={()=> setWisdom(wisdom ? null : "wisdom")}>
                <TopicCard text="Wisdom" src="/TopicCardIcons/wisdom.png" />
            </CardCont>
            <CardCont onClick={()=> setArt(art ? null : "art")}>
                <TopicCard text="Art" src="/TopicCardIcons/art.png" />
            </CardCont>
            {/* <SortTab 
                setSBPType={setSBPType}
                setSBP={setSBP}
                sbp={sbp}
                sbp_type={sbp_type}
                setSBAType={setSBAType}
                setSBA={setSBA}
                sba={sba}
                sba_type={sba_type}
            /> */}
          <Btn style={{ flexBasis:"800px"}}
            text="Continue"
            onClick={async () => {
              getQuotes();
              setQuoteData(quoteData);
              r.push('/results')
            }}
          />
        </TCMainCont>
      </MainCont>
    );
 
    // <QuoteCont>
    //     {data.map((o, i) => (
    //       <QuoteCard
    //         key={i}
    //         text={o.Quote}
    //         subText={o.Author} 
    //         checked={fav[o.Quote] !== undefined && fav[o.Quote] !== null}
    //         onChange={
    //         (e)=>StoreFav(e.target.checked, o)
    //       }
    //       />
    //     ))}
    //     <Btn onClick={()=>r.push(`/saved/${uuidv4()}`)} text='Add to Favorite'/>
        
    // </QuoteCont>
};
