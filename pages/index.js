import styled from "@emotion/styled";

import Main from "../src/components/units/main/Main.container";

const Container = styled.div`
  padding: 10px;
`;
const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    margin: 0;
    padding: 0;
  }
`;

export default function Home() {
  return (
    <Container>
      <TopWrapper>
        <h1>제품전체</h1>
        <div>필터링</div>
      </TopWrapper>

      <Main />
    </Container>
  );
}
