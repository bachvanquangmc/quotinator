import styled from "styled-components";

import Navbar from "../comps/Navbar";
import Header from "../comps/Header";
import SwitchTab from "../comps/SwitchTab";
import Switch from "../comps/switch";
import { useTheme } from "../utils/provider";

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
export default function settings() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <MainCont>
      <Navbar />
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
            <p style={{ color: "black" }}>DARK MODE</p>
            <SwitchTab
              onSwitchClick={() => {
                setTheme(theme === "dark" ? "default" : "dark");
              }}
            />
          </RowCont>
          <RowCont>
            <p style={{ color: "black" }}>TEXT SIZE</p>
            <SwitchTab />
          </RowCont>
          <RowCont>
            <p style={{ color: "black" }}>NUMBER OF QUOTES</p>
          </RowCont>
        </CardCont>
      </QuotCont>
    </MainCont>
  );
}
