import * as S from "./Furnitures.styles";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import useFetch from "../../../components/commons/hooks/useFetch";

export default function Furnitures() {
  const { onClickMoveToPage } = useMoveToPage();
  const all = useFetch("http://localhost:3001/alldata");

  return (
    <S.Container>
      <S.TopWrapper>
        <h1 onClick={onClickMoveToPage("/furnitures")}>가구</h1>
        <S.Filter>필터 &#9662;</S.Filter>
      </S.TopWrapper>

      <S.Menu>
        <S.MenuList nClick={onClickMoveToPage("/")}>전체</S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/armchair")}>
          암체어/라운지체어
        </S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/chair")}>의자</S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/table")}>테이블</S.MenuList>
      </S.Menu>
      <S.ItemWrapper>
        {all.map((e) => (
          <S.ItemBox key={e.id}>
            <S.Image src={e.imgSrc} alt="제품사진"></S.Image>
            <S.TitleBox>
              <h2>{e.name}</h2>
              <div>{e.remark}</div>
            </S.TitleBox>
            <S.EngTitle>{e.eng}</S.EngTitle>
            <S.KorTitle>{e.kor}</S.KorTitle>
            <S.IconBox>
              <div>하트</div>
              <div>북마크</div>
            </S.IconBox>
          </S.ItemBox>
        ))}
      </S.ItemWrapper>
    </S.Container>
  );
}
