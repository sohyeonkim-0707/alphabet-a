import styled from "@emotion/styled";

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Like = styled.img`
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const BookMark = styled.img`
  width: 20px;
  cursor: pointer;
`;

export default function Icon() {
  return (
    <>
      <IconBox>
        <Like src="/icon/love.png" alt="좋아요"></Like>
        <BookMark src="/icon/bookmark.png" alt="북마크"></BookMark>
      </IconBox>
    </>
  );
}
