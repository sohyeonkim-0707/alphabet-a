import * as S from "./Chair.styles";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import useFetch from "../../../components/commons/hooks/useFetch";
import Icon from "../../../components/commons/iconBox/Icon.container";
import { useState } from "react";

export default function ChairContainer() {
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
      <S.ItemWrapper>
        {all[0]?.chair.map((e) => (
          <S.ItemBox key={e.id}>
            <S.Image alt="제품사진" src={e.imgSrc}></S.Image>
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
