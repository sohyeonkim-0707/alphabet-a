import * as S from "./Table.styles";
import useMoveToPage from "../../../../src/components/commons/hooks/useMoveToPage";
import useFetch from "../../../components/commons/hooks/useFetch";
import Icon from "../../commons/iconBox/Icon.container";

export default function TableContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const all = useFetch("http://localhost:3001/sortdata");

  return (
    <S.Container>
      <S.TopWrapper>
        <h1 onClick={onClickMoveToPage("/")}>가구</h1>
        <h1 onClick={onClickMoveToPage("/")}>&gt; 테이블</h1>
        <S.Filter>필터 &#9662;</S.Filter>
      </S.TopWrapper>
      <S.Menu>
        <S.MenuList onClick={onClickMoveToPage("/table")}>전체</S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/table/sidetable")}>
          사이드 테이블
        </S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/table/deck")}>책상</S.MenuList>
      </S.Menu>

      <S.InnerWrapper>
        {all[0]?.table.map((e) => (
          <S.ItemBox key={e.id}>
            <S.Image src={e.imgSrc} alt="제품사진"></S.Image>
            <S.TitleBox>
              <h2>{e.name}</h2>
              <div>{e.remark}</div>
            </S.TitleBox>
            <S.EngTitle>{e.eng}</S.EngTitle>
            <S.KorTitle>{e.kor}</S.KorTitle>
            <Icon />
          </S.ItemBox>
        ))}
      </S.InnerWrapper>
    </S.Container>
  );
}
