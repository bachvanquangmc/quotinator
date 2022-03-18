import styled from "styled-components";

const MainCont = styled.div``;

const Btn = styled.button`
  background-color: ${props=>props.bgColor};
  color: ${props=>props.numColor};
  border: none;
  border-radius: 3px;
  padding: 5px 7px 5px 7px;
  margin: 5px;
  cursor: pointer;
`;
const PageBtn = ({ page_num = "1", bgColor="#7b9582", numColor="#fff", onclick = () => {} }) => {
  return (
    <MainCont>
      <Btn 
      bgColor={bgColor}
      numColor={numColor}
      onClick={onclick}>{page_num}</Btn>
    </MainCont>
  );
};

export default PageBtn;
