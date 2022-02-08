import styled from "styled-components";

const MainCont = styled.div``;

const Btn = styled.button`
  background-color: #7b9582;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 7px 5px 7px;

  cursor: pointer;
`;
const PageBtn = ({ page_num = "1", onclick = () => {} }) => {
  return (
    <MainCont>
      <Btn onClick={onclick}>{page_num}</Btn>
    </MainCont>
  );
};

export default PageBtn;
