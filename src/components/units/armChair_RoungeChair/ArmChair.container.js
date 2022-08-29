import * as S from "./ArmChair.styles";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import useFetch from "../../../components/commons/hooks/useFetch";

export default function ArmChairContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const all = useFetch("http://localhost:3001/sortdata");

  return (
    <S.Container>
      <S.TopWrapper>
        <h1 onClick={onClickMoveToPage("/")}>가구</h1>
        <h1 onClick={onClickMoveToPage("/armchair")}> &gt; 암체어</h1>
        <div>필터</div>
      </S.TopWrapper>
      <S.Menu>
        <S.MenuList>전체</S.MenuList>
        <S.MenuList>암체어</S.MenuList>
      </S.Menu>
      <S.ItemBox>
        <S.Image src="armchair/maparmchair.jpg" alt="제품사진"></S.Image>
        <S.TitleBox>
          <h2>{all[0]?.armchair[0].name}</h2>
          <div>{all[0]?.armchair[0].remark}</div>
        </S.TitleBox>
        <S.EngTitle>{all[0]?.armchair[0].eng}</S.EngTitle>
        <S.KorTitle>{all[0]?.armchair[0].kor}</S.KorTitle>
        <S.IconBox>
          <div>하트</div>
          <div>북마크</div>
        </S.IconBox>
      </S.ItemBox>
    </S.Container>
  );
}
