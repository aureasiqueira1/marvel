import styled from "styled-components";

interface GradientProps {
  boxShadow: string;
  width: string;
  height: string;
}

export const Img = styled.img<GradientProps>`
  float: right;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 ${(props) => props.boxShadow}
  );
  display: flex;
  margin-right: -200px;
`;
