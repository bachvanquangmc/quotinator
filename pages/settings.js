import styled from "styled-components";
import { useState } from 'react';

import Navbar from "../comps/Navbar";
import Header from "../comps/Header";
import SwitchTab from "../comps/SwitchTab";
import { useTheme } from "../utils/provider";
import { Slider } from "@mui/material";
import { useRouter } from "next/router";
import { useSBP } from "../utils/provider";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  // background-color: #f2f0ee;
`;

const SubCont = styled.div`
  margin: 20px;
`;

const QuotCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CardCont = styled.div`
  flex-basis: 90%;
  min-height: 600px;
  background: #e5ded6;
  margin-bottom: 5rem;
`;
const RowCont = styled.div`
  display: flex;
  margin: 3rem;
  justify-content: space-between;
  align-items: center;
`;
const NavBarCont = styled.div`
position: -webkit-sticky;
position: sticky;
top: 0;
`
export default function Settings() {
  const { theme, setTheme } = useTheme();
  const router = useRouter()
  console.log(theme);

  const [cut, setCut] = useState(10);

  const {sbp, setSBP} = useSBP()

  console.log(sbp)
  return (
    <MainCont>
      <NavBarCont>
        <Navbar goBack={()=>router.push('/')}/>
      </NavBarCont>
      <SubCont>
        <Header header="Settings" />
        <Header
          fontsize={"14px"}
          fontweight={100}
          header="Application settings"
        />
      </SubCont>

      <QuotCont>
        <CardCont>
          <RowCont>
            <p style={{ color: "black" }}>Dark Mode</p>
            <SwitchTab
              onSwitchClick={() => {
                setTheme(theme === "dark" ? "default" : "dark");
              }}
            />
          </RowCont>
          <RowCont>
            <p style={{ color: "black" }}>Display Quotes by Popularity</p>
            <SwitchTab
              onSwitchClick={() => {
               setSBP("Popularity")
              }}
            />
          </RowCont>
          <RowCont>
            <p style={{ color: "black" }}>Sort Authors Alphabetically</p>
            <SwitchTab
              onSwitchClick={() => {
                setSBP("Author")
              }}
            />
          </RowCont>
          <RowCont>
            <p style={{ color: "black" }}>NUMBER OF QUOTES</p>
          </RowCont>
          <RowCont>
            <Slider/>
          </RowCont>
        </CardCont>
      </QuotCont>
    </MainCont>
  );
}
