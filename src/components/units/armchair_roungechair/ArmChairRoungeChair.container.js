import * as S from "./ArmChairRoungeChair.styles";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import useFetch from "../../commons/hooks/useFetch";
import Icon from "../../commons/iconBox/Icon.container";

export default function ArmChairRoungeChairContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const all = useFetch("http://localhost:3001/sortdata");

  return (
    <S.Container>
      <S.TopWrapper>
        <h1 onClick={onClickMoveToPage("/")}>가구</h1>
        <h1 onClick={onClickMoveToPage("/armchair")}> &gt; 암체어</h1>

        <S.Filter>필터 &#9662;</S.Filter>
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
        <Icon />
      </S.ItemBox>
    </S.Container>
  );
}
