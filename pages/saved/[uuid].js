import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import ax from "axios";

import Navbar from "../../comps/Navbar";
import Header from "../../comps/Header";
import Subheader from "../../comps/Subheader";
import QuoteCardDrag from "../../comps/QuoteCardDrag";
import PageBtn from "../../comps/PageBtn";
import Btn from "@/comps/Btn";
import TrashBin from "@/comps/TrashBin";


import { useFav } from "@/utils/provider";
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

const NavBarCont = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;


export default function Saved() {
  const r = useRouter();
  const { uuid } = r.query;
  const [alert, setAlert] = useState(null);
  const { theme, setTheme } = useTheme();
  const { fav, setFav } = useFav({});
  const [id, setId] = useState();

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

  useEffect(() => {
    if (uuid) {
      const GetFav = async () => {
        const res = await ax.get("/api/save", {
          params: {
            uuid,
            fav,
            id
          },
        });
        if (res.data !== false) {
          setFav(res.data);
        }
      };
      GetFav();
    }
  }, [uuid]);

  const saveFav = async () => {
    const res = await ax.post("/api/save", {
      uuid,
      fav,
      id
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
      <DndProvider
        backend={TouchBackend}
        options={{
          enableTouchEvents: false,
          enableMouseEvents: true,
        }}
      >
        <SubCont>
          <Header header="Your Favorites" />
        </SubCont>
        <QuotCont>
          {Object.values(fav).map((o, i) => (
            <QuoteCardDrag key={o.id} item={o} text={o.Quote} subText={o.Author} />
          ))}
          <Btn onClick={saveFav} text="Save to your favorite" />
          {alert && (
            <div style={{ color: global_theme[theme].text }}>{alert}</div>
          )}
        </QuotCont>

        <div style={{ position: "fixed", bottom: 10, left: 10 }}>
          <TrashBin
            onDropItem={(item) => {
              delete fav[item.id];
              setFav({
                ...fav,
              });
            }}
          >
            {/* {Object.values(fav).map((o,i) => {
            if(fav[o.id]) {
              return <React.Fragment key={o.id} />
            }
          })} */}
          </TrashBin>
        </div>
      </DndProvider>
    </MainCont>
  );
}
