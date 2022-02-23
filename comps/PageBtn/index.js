import styled from "styled-components";

const MainCont = styled.div``;

const Btn = styled.button`
  background-color: ${props=>props.bgColor};
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 7px 5px 7px;
  margin: 5px;
  cursor: pointer;
`;
const PageBtn = ({ page_num = "1", bgColor="#7b9582", onclick = () => {} }) => {
  return (
    <MainCont>
      <Btn 
      bgColor={bgColor}
      onClick={onclick}>{page_num}</Btn>
    </MainCont>
  );
};

export default PageBtn;
