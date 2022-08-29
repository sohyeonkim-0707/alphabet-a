import * as S from "./Main.styles";
import { useRouter } from "next/router";
import useMoveToPage from "../../../components/commons/hooks/useMoveToPage";

export default function AllContainer() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container>
      <S.Menu>
        <S.MenuList onClick={onClickMoveToPage("/")}>전체</S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/armChair")}>
          암체어/라운지체어
        </S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/chair")}>의자</S.MenuList>
        <S.MenuList onClick={onClickMoveToPage("/table")}>테이블</S.MenuList>
      </S.Menu>
      {/* 맵 돌리기 */}
      <S.ItemBox>
        <S.Image src="" alt="제품사진"></S.Image>
        <S.TitleBox>
          <h2>상품명</h2>
          <div>디자이너</div>
        </S.TitleBox>
        <S.EngTitle>영문</S.EngTitle>
        <S.KorTitle>한글</S.KorTitle>
        <S.IconBox>
          <div>하트</div>
          <div>북마크</div>
        </S.IconBox>
      </S.ItemBox>
    </S.Container>
  );
}
