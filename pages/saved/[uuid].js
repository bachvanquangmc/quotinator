import React from "react";
import styled from "styled-components";
import Navbar from "../../comps/Navbar";
import Header from "../../comps/Header";
import Subheader from "../../comps/Subheader";
import QuoteCardDrag from "../../comps/QuoteCardDrag";
import PageBtn from "../../comps/PageBtn";
import Btn from "@/comps/Btn";
import TrashBin from "@/comps/TrashBin";

import ax from "axios";
import { useFav } from "@/utils/provider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTheme } from "../../utils/provider";
import { global_theme } from "../../utils/variables";

import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  min-height: 100vh;
  margin-bottom: 100px;
`;

const SubCont = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const ImgCont = styled.div`
  width: 50px;
  height:50px;

  &:hover {

  }
`;

const Img = styled.img`
  width:100%;
  height:100%;
  boject-fit: cover;
`;

export default function Saved() {
  const r = useRouter();
  const { uuid } = r.query;
  const [alert, setAlert] = useState(null);
  const { theme, setTheme } = useTheme();

  const { fav, setFav } = useFav();

  useEffect(() => {
    if (uuid) {
      const GetUUID = async () => {
        const res = await ax.get("/api/save", {
          params: {
            uuid: uuid,
          },
        });
        if (res.data !== false) {
          console.log(res);
          setFav(res.data);
        }
      };
      GetUUID();
    }
  }, [uuid]);

  const saveFav = async () => {
    const res = await ax.post("/api/save", {
      uuid,
      fav,
    });
    setAlert("Save Succsessfuly"),
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  };

  return (
    <MainCont>
      <NavBarCont>
        <Navbar goBack={() => r.push("/results")} />
      </NavBarCont>
      <SubCont>
        <DndProvider
          backend={TouchBackend}
          options={{
            enableTouchEvents: false,
            enableMouseEvents: true,
          }}
        >
          <Header header="Your Favorites" />
          <TrashBin 
            onDropItme={(item) => {
              delete fav[item.Quote];
              setFav({
                ...fav
              })
            }}
          />
        </DndProvider>
      </SubCont>
      <QuotCont>
        {Object.values(fav).map((o, i) => (
          <QuoteCardDrag key={i} text={o.Quote} subText={o.Author} />
        ))}
        <Btn onClick={{
          saveFav 
          
          }} text="Save to your favorite" />
        {alert && (
          <div style={{ color: global_theme[theme].text }}>{alert}</div>
        )}
      </QuotCont>
    </MainCont>
  );
}
