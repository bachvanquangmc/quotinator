import React from "react";
import styled from "styled-components";
import Navbar from "../../comps/Navbar";
import Header from "../../comps/Header";
import Subheader from "../../comps/Subheader";
import QuoteCard from "../../comps/QuoteCard";
import PageBtn from "../../comps/PageBtn";
import Btn from "@/comps/Btn";

import ax from "axios";
import { useFav } from "@/utils/provider";
import { useRouter } from "next/router";
import { useEffect } from "react";


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
`

export default function Saved() {
  const r = useRouter();
  const { uuid } = r.query;

  const { fav, setFav } = useFav();

  useEffect(()=>{
    if(uuid){
      const GetUUID = async()=>{
        const res = await ax.get('/api/save', {
          params:{
            uuid:uuid
          }
        })
        if(res.data !== false){
          console.log(res)
          setFav(res.data)
        }
      }
      GetUUID()
    }
  },[uuid])
  const saveFav = async()=>{
    const res = await ax.post('/api/save',{
      uuid:uuid,
      fav:fav
    })
  }


  return (
    <MainCont>
        <NavBarCont>
        <Navbar goBack={()=>r.push('/results')}/>
      </NavBarCont>
      <SubCont>
        <Header header="Your Favorites" />
        
      </SubCont>
      <QuotCont>

        {Object.values(fav).map((o,i)=>
          <QuoteCard 
            key={i}
            text={o.Quote}
            subText={o.Author}
          />
)}
    <Btn onClick={saveFav} text="Save to your favorite"/>
      </QuotCont>
    </MainCont>
  );
}
