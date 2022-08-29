/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid red;
`;

export default function Icon() {
  return (
    <>
      <IconBox>
        <div>좋아요</div>
        <div>북마크</div>
      </IconBox>
    </>
  );
}
