import { css, styled } from "styled-components";

const Row = styled.div`
  ${(props) =>
    props.type === "horizontal" &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    `}
`;
Row.defaultProps = {
  type: "vertical",
};
export default Row;
