import { Img } from "./styles";
import Vingadores from "../../assets/img/vingadores.jpeg";

interface GradientProps {
  boxShadow: string;
  width: string;
  height: string;
}

const Background = ({ boxShadow, width, height }: GradientProps) => (
  <Img
    src={Vingadores.src}
    alt="Vingadores"
    boxShadow={boxShadow}
    width={width}
    height={height}
  />
);

export default Background;
