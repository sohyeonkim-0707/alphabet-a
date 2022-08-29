import * as S from "./Main.styles";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import useFetch from "../../../components/commons/hooks/useFetch";
import Icon from "../../commons/iconBox/Icon.container";

export default function Main() {
  const { onClickMoveToPage } = useMoveToPage();
  const all = useFetch("http://localhost:3001/alldata");

  return (
    <S.Container>
      <S.TopWrapper>
        <h1 onClick={onClickMoveToPage("/")}>제품전체</h1>
        <S.Filter>필터 &#9662;</S.Filter>
      </S.TopWrapper>
      <S.Menu>
        <S.MenuList onClick={onClickMoveToPage("/")}>전체</S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/furnitures")}>가구</S.MenuList>
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
            <Icon />
          </S.ItemBox>
        ))}
      </S.ItemWrapper>
    </S.Container>
  );
}
