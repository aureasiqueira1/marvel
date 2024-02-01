import { Img } from "../../pages/characters/styles";
import Cards from "../Cards";
import {
  Avaible,
  Container,
  Details,
  MovieName,
  Movies,
  Paragraph,
  Note,
  Title,
} from "./styles";

import { Rating } from "react-simple-star-rating";
import { FaRegTimesCircle } from "react-icons/fa";
import Amazon from "../../assets/img/amazon.png";
import Americanas from "../../assets/img/americanas.png";
import Disney from "../../assets/img/disney.png";
import { StaticImageData } from "next/image";
import { useState } from "react";

interface ModalProps {
  info: {
    id: number;
    name: string;
    resume: string;
    movies: any[];
    picture: StaticImageData;
    avaible: any[];
    stars: number;
  };
  infos?:
    | {
        id: number;
        name: string;
        resume: string;
        movies: string[];
        picture: StaticImageData;
        avaible: never[];
        stars: number;
      }[]
    | undefined;

  closeModal: () => void;
  etc: string[];
}

interface HQProps {
  id: number;
  name: string;
  resume: string;
  movies: any[];
  picture: StaticImageData;
  avaible: StaticImageData[];
  stars: number;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Modal = ({ info, infos, closeModal, etc }: ModalProps) => {
  return (
    <Container>
      <Cards>
        <Img src={info.picture.src} alt={info.name} />
        <Details>
          <div>
            <Title>{info.name}</Title>
            {etc[1] === "Crítica" && <Paragraph>{info.resume}</Paragraph>}
            <Movies>
              <MovieName>{etc[0]}</MovieName>
              {info.movies.map(
                (i) =>
                  etc[1] !== "Crítica" && <Paragraph key={i}>{i}</Paragraph>
              )}
              {etc[0] === "Disponível para compra:" && (
                <>
                  <Avaible src={Americanas.src} alt="Americanas" />
                  <Avaible src={Amazon.src} alt="Amazon" />
                </>
              )}
              {etc[0] === "Disponível em streaming:" && (
                <Avaible src={Disney.src} alt="Disney" />
              )}

              <Note>{etc[1]}</Note>
              <div>
                <Rating
                  initialValue={info.stars}
                  fillColor={"#FF9C00"}
                  size={32}
                  readonly
                />
              </div>
            </Movies>
          </div>
          <FaRegTimesCircle
            onClick={closeModal}
            style={{
              position: "absolute",
              cursor: "pointer",
              zIndex: "100",
              bottom: "5%",
              right: "5%",
              fontSize: "1.875rem",
            }}
          />
        </Details>
      </Cards>
    </Container>
  );
};
