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
import { useEffect, useState } from "react";
import { useTheme } from "../../utils/provider"
import {global_theme } from '../../utils/variables'
import axios from "axios";

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
  const [alert, setAlert] = useState(null)
  const {theme, setTheme} = useTheme()
  
  const { fav, setFav } = useFav();
  const [favs, setFavs] = useState()

  
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

  // useEffect(()=>{
//     const fetchFavs = () => {
//         // axios
//         //   .get('http://localhost:3000/saved/aa139290-df9e-4889-bb29-27ce03c5fb9c')
//         //   .then((response) => {
//         //     const result = response;
//         //     setFavs(result);
//         //   });
//         //   console.log(favs);

//         fetch("http://localhost:3000/saved/6234c32dcaa7d50ac5e362f9")
//         .then((response) => {
//           response.json()
//           console.log(response)
//         })
//         // .then((responseJson) => {
//         //   setFavs(responseJson.data);
//         //   console.log(responseJson)
//         // });
//         };
// //         fetchFavs
// // },[])
  const saveFav = async()=>{
    const res = await ax.post('/api/save',{
      uuid:uuid,
      fav:fav
    })
    setAlert("Save Succsessfuly")
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
    {/* <Btn onClick={fetchFavs} text="teste"/> */}
    {alert && <div style={{color:global_theme[theme].text}}>{alert}</div>}
      </QuotCont>
    </MainCont>
  );
}
