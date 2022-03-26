import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ax from "axios";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

import Navbar from "../comps/Navbar";
import Header from "../comps/Header";
import Subheader from "../comps/Subheader";
import TopicCard from "../comps/TopicCard";
import SearchBar from "../comps/SearchBar";
import Btn from "../comps/Btn";
import QuoteCard from "@/comps/QuoteCard";
import SortTab from "@/comps/SortTab";
import PageBtn from "../comps/PageBtn";
import Switch from "../comps/Switch";

import { useFav } from "@/utils/provider";
import { useQuoteData } from "../utils/provider";
import { useData } from "../utils/provider";
import { useSBP } from "@/utils/provider";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  min-height: 100vh;
`;

const TCMainCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2rem;
`;

const QuoteCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;
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

  const r = useRouter();

  const { quoteData, setQuoteData } = useQuoteData({});
  const { sbp, setSBP } = useSBP();

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
      },
    });
    console.log(res.data);
    setQuoteData(res.data);
  };


  const StoreFav = (checked, obj) => {
    console.log(checked, obj)
    if (checked) {
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
           
          <Btn style={{ flexBasis:"800px"}}
            text="Continue"
            onClick={async () => {
              getQuotes();
              setQuoteData(quoteData);
              r.push('/results')
            }}
          />
        </CardCont>
        <CardCont onClick={() => setReligion(religion ? null : "religion")}>
          <TopicCard text="Religion" src="/TopicCardIcons/religion.png" />
        </CardCont>
        <CardCont onClick={() => setLove(love ? null : "love")}>
          <TopicCard text="Love" src="/TopicCardIcons/love.png" />
        </CardCont>
        <CardCont
          onClick={() => setPhilosophy(philosophy ? null : "philosophy")}
        >
          <TopicCard text="Philosophy" src="/TopicCardIcons/philosophy.png" />
        </CardCont>
        <CardCont onClick={() => setBooks(books ? null : "books")}>
          <TopicCard text="Books" src="/TopicCardIcons/books.png" />
        </CardCont>
        <CardCont onClick={() => setDeath(death ? null : "death")}>
          <TopicCard text="Death" src="/TopicCardIcons/death.png" />
        </CardCont>
        <CardCont onClick={() => setHope(hope ? null : "hope")}>
          <TopicCard text="Hope" src="/TopicCardIcons/hope.png" />
        </CardCont>
        <CardCont onClick={() => setWisdom(wisdom ? null : "wisdom")}>
          <TopicCard text="Wisdom" src="/TopicCardIcons/wisdom.png" />
        </CardCont>
        <CardCont onClick={() => setArt(art ? null : "art")}>
          <TopicCard text="Art" src="/TopicCardIcons/art.png" />
        </CardCont>

        <Btn
          style={{ flexBasis: "800px" }}
          text="Continue"
          onClick={async () => {
            getQuotes();
            setQuoteData(quoteData);
            r.push("/results");
          }}
        />
      </TCMainCont>
    </MainCont>
  );
}
