import { useState } from "react";
import styled from "styled-components";
import WindMill from "../components/WindMill";

const MainPage = () => {
  const [count, setCount] = useState(0);

  const onClickButton = () => {
    if (count < 20) {
      setCount((prev) => prev + 1);
    } else {
      alert("그만~");
    }
  };

  return (
    <>
      <Header>
        <Title>크로켓으로 갈래요!</Title>
        <div>안녕하세요 👋</div>
      </Header>
      <Main>
        <Button>test</Button>
        <Button onClick={onClickButton}>{count} +</Button>
        <WindMill row={count} />
      </Main>
    </>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 30px 10px;
  font-size: 18px;
`;

const Title = styled.div`
  color: rgb(101, 67, 208);
`;

const Main = styled.div`
  flex-direction: column;
  background-color: black;
  padding: 14px 10px;
`;

const Button = styled.button`
  display: block;
  background-color: rgb(107, 66, 249);
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 8px;
`;

export default MainPage;
