// 사이드 테이블
import * as S from "../../../src/components/units/table/Table.styles";
import useMoveToPage from "../../../src/components/commons/hooks/useMoveToPage";
import useFetch from "../../../src/components/commons/hooks/useFetch";

export default function SideTable() {
  const { onClickMoveToPage } = useMoveToPage();
  const all = useFetch("http://localhost:3001/sortdata");
  return (
    <S.Container>
      <S.TopWrapper>
        <h1>가구</h1>
        <h1>&gt; 테이블</h1>
        <div>필터</div>
      </S.TopWrapper>
      <S.Menu>
        <S.MenuList onClick={onClickMoveToPage("/table")}>전체</S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/table/sidetable")}>
          사이드 테이블
        </S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/table/deck")}>책상</S.MenuList>
      </S.Menu>
      {/* 맵 돌리기 */}
      <S.ItemBox>
        <S.Image src="/table/sidetable.jpg" alt="제품사진"></S.Image>
        <S.TitleBox>
          <h2>{all[0]?.table[1].name}</h2>
          <div>{all[0]?.table[1].remark}</div>
        </S.TitleBox>
        <S.EngTitle>{all[0]?.table[1].eng}</S.EngTitle>
        <S.KorTitle>{all[0]?.table[1].kor}</S.KorTitle>
        <S.IconBox>
          <div>하트</div>
          <div>북마크</div>
        </S.IconBox>
      </S.ItemBox>
    </S.Container>
  );
}
