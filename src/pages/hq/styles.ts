import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Content = styled.main``;

export const CarouselStyle = styled.section`
  display: flex;
  justify-content: center;
  float: right;
  position: absolute;

  height: 80%;
  width: 100vw;
`;

export const CardSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 50px;
  top: 20%;
  color: var(--red);
  z-index: 1;
  transform: scale(1.3);
`;

export const Img = styled.img`
  position: relative;
  margin-right: auto;
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

export const CardSelectorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  bottom: 0;

  width: 290px;
  height: 200px;

  border-radius: 24px;
  background: linear-gradient(var(--red) 5%, transparent 150%);
  color: white;

  h2 {
    font-size: 1.5rem;
    font-family: "Axiforma";
    font-weight: 700;

    margin-top: 15px;
    margin-bottom: 8px;
  }

  p {
    width: 243px;
    height: 123px;

    font-size: 0.8rem;
    font-family: "Axiforma";
    font-weight: 100;

    text-align: left;
  }

  span {
    font-size: 1.35rem;
    font-family: "Axiforma";
    font-weight: 100;

    margin-top: -35px;

    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

interface SliderProps {
  presentSlide: string;
}

const Slider = styled.div<SliderProps>`
  display: ${(props) => (props.presentSlide === "slide" ? "none" : "")};
`;

export default Slider;
