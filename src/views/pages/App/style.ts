import styled from "styled-components";

export const Container = styled.div`
  width: 180px;
  margin: 0;

  .content {
    & button {
      color: #fff;
      background: red;
      border: none;
      font-size: 22px;
      border-radius: 12px;
      padding: 10px;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        background: pink;
      }
    }
  }
`;
