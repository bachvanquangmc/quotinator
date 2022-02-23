import React from "react";
import styled from "styled-components";
import Navbar from "../../comps/Navbar";
import Header from "../../comps/Header";
import Subheader from "../../comps/Subheader";
import QuoteCard from "../../comps/QuoteCard";
import PageBtn from "../../comps/PageBtn";

import ax from "axios";
import { useFav } from "@/utils/provider";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f0ee;
  width: 375px;
  min-height: 812px;

  @media only screen and (min-width: 992px) {
    display: flex;
    width: 100%;
    height: auto;
  }
`;

const NavCont = styled.div`
  display: flex;
  min-width: 320px;
  min-height: 40px;
  margin-top: 5px;
`;

const HeaderCont = styled.div`
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 320px;
  margin: 5px;
`;

const QuoteCont = styled.div`
  flex-basis: 70%;
  margin-bottom: 5px;
`;

const FooterCont = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 0px;
`;

export default function Saved() {
  const r = useRouter();
  const { uuid } = r.query;

  const { fav, setFav } = useFav();

  useEffect(() => {
    if (uuid) {
      const GetUUID = async () => {
        const res = await ax.get("/api/save", {
          params: {
            uuid,
            fav,
          },
        });

        if (res.data !== false) {
          setFav(res.data);
        }
      };
      GetUUID();
    }
  }, [uuid]);


  return (
    <MainCont>
      <NavCont>{/* <Navbar /> */}</NavCont>

      <HeaderCont>
        <Header header="Saved" />
        <Subheader subheader="Favorite stored quotes" />
      </HeaderCont>

      <QuoteCont>
      {Object.values(fav).map((o, i) => (
        <div>
            <QuoteCard 
            text={o.Quote} subText={o.Author}
            />
        </div>
      ))}
        
      </QuoteCont>

      <FooterCont>
        <PageBtn />
      </FooterCont>
    </MainCont>
  );
}
