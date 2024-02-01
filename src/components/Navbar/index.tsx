import Image from "next/image";
import { Header, Logo, Marvel, Navigation, Links, Site } from "./styles";
import { useRouter } from "next/router";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();

  return (
    <Header>
      <Logo>
        <Marvel>MARVEL</Marvel>
      </Logo>
      <Navigation>
        <Links>
          <li>
            <Site href="/characters" isActive={router.asPath === "/characters"}>
              Personagens
            </Site>
          </li>
          <li>
            <Site href="/movies" isActive={router.asPath === "/movies"}>
              Filmes
            </Site>
          </li>
          <li>
            <Site href="/hq" isActive={router.asPath === "/hq"}>
              HQs
            </Site>
          </li>
          <li>
            <FaRegUserCircle fontSize={30} color="#fff" />
            <Site href="/" isActive={router.asPath === "/"}>
              Sair
            </Site>
          </li>
        </Links>
      </Navigation>
    </Header>
  );
};

export default Navbar;
