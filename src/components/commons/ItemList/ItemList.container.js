import * as S from "./ItemList.styles";

export default function Item() {
  return (
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
  );
}
