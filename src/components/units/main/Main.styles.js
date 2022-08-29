import styled from "@emotion/styled";

export const Container = styled.div`
  width: 600px;
  padding: 10px;
  border: 1px solid lightgray;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  justify-content: space-between;
  h1 {
    margin: 0;
    margin-right: 10px;
    padding: 0;
    font-size: 24px;
  }
`;

export const Filter = styled.div`
  width: 70px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 20px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const MenuList = styled.div`
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
  color: lightgray;
  :hover {
    color: black;
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 290px;
  height: 390px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 70%;
  background-color: lightblue;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  h2 {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: normal;
  }

  div {
    margin-left: 10px;
    font-size: 12px;
    color: gray;
  }
`;

export const EngTitle = styled.div`
  font-size: 12px;
`;
export const KorTitle = styled.div`
  font-size: 12px;
  color: gray;
`;
