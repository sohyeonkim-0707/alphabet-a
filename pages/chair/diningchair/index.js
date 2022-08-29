import * as S from "../../../src/components/units/chair/Chair.styles";
import useMoveToPage from "../../../src/components/commons/hooks/useMoveToPage";
import useFetch from "../../../src/components/commons/hooks/useFetch";
import Icon from "../../../src/components/commons/iconBox/Icon.container";

export default function DiningChair() {
  const { onClickMoveToPage } = useMoveToPage();
  const all = useFetch("http://localhost:3001/sortdata");

  return (
    <S.Container>
      <S.TopWrapper>
        <h1 onClick={onClickMoveToPage("/")}>가구</h1>
        <h1 onClick={onClickMoveToPage("/")}>&gt; 의자</h1>
        <S.Filter>필터 &#9662;</S.Filter>
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
      <S.InnerWrapper>
        <S.ItemBox>
          <S.Image alt="제품사진" src={"/chair/antchair.jpg"}></S.Image>
          <S.TitleBox>
            <h2>{all[0]?.chair[0].name}</h2>
            <div>({all[0]?.chair[0].remark})</div>
          </S.TitleBox>
          <S.EngTitle>{all[0]?.chair[0].eng}</S.EngTitle>
          <S.KorTitle>{all[0]?.chair[0].kor}</S.KorTitle>
          <Icon />
        </S.ItemBox>

        <S.ItemBox>
          <S.Image alt="제품사진" src={"/chair/hammerchair.jpg"}></S.Image>
          <S.TitleBox>
            <h2>{all[0]?.chair[1].name}</h2>
            <div>({all[0]?.chair[1].remark})</div>
          </S.TitleBox>
          <S.EngTitle>{all[0]?.chair[1].eng}</S.EngTitle>
          <S.KorTitle>{all[0]?.chair[1].kor}</S.KorTitle>
          <Icon />
        </S.ItemBox>
      </S.InnerWrapper>
    </S.Container>
  );
}
