import * as S from "../../../src/components/units/chair/Chair.styles";
import useMoveToPage from "../../../src/components/commons/hooks/useMoveToPage";
import Item from "../../../src/components/commons/ItemList/ItemList.container";
import useFetch from "../../../src/components/commons/hooks/useFetch";

export default function Swivel() {
  const { onClickMoveToPage } = useMoveToPage();
  const all = useFetch("http://localhost:3001/sortdata");

  return (
    <S.Container>
      <S.TopWrapper>
        <h1 onClick={onClickMoveToPage("/")}>가구</h1>
        <h1 onClick={onClickMoveToPage("/")}>&gt; 의자</h1>
        <div>필터</div>
      </S.TopWrapper>
      <S.Menu>
        <S.MenuList onClick={onClickMoveToPage("/chair")}>전체</S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/chair/diningchair")}>
          다이닝 체어
        </S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/chair/stool")}>
          벤치 / 스툴
        </S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/chair/swivel")}>
          스웨벨 체어
        </S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/chair/stacking")}>
          스태킹 체어
        </S.MenuList>
      </S.Menu>
      <S.ItemBox>
        <S.Image src="/chair/emeco.jpg" alt="제품사진"></S.Image>
        <S.TitleBox>
          <h2>{all[0]?.chair[3].name}</h2>
          <div>{all[0]?.chair[3].remark}</div>
        </S.TitleBox>
        <S.EngTitle>{all[0]?.chair[3].eng}</S.EngTitle>
        <S.KorTitle>{all[0]?.chair[3].kor}</S.KorTitle>
        <S.IconBox>
          <div>하트</div>
          <div>북마크</div>
        </S.IconBox>
      </S.ItemBox>
    </S.Container>
  );
}
