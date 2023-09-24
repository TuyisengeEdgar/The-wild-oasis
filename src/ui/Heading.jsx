import { css, styled } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weigth: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weigth: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1rem;
      font-weigth: 500;
    `};
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
      font-weigth: 500;
      text-align: center;
    `};
  line-height: 1.4;
`;
export default Heading;
