import styled from "@emotion/styled";

export const Container = styled.div`
  border: 1px solid lightgray;
  width: 600px;
  height: 800px;
  padding: 10px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  h1 {
    margin: 0;
    padding: 0;
    margin-right: 10px;
    font-size: 24px;
  }
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
`;

export const ItemBox = styled.div`
  width: 49%;
  height: 50%;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    font-size: 16px;
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

export const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid red;
`;
