import React from "react";
import { logoCompleto } from "../../assets";
import * as S from "./style";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <>
      <S.Nav>
        <img src={logoCompleto} />
        <S.Links>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projetos">Projetos</Link>
          </li>
          <li>
            <Link to="/Cursos">Cursos</Link>
          </li>
          <li>
            <Link to="/Contato">Contato</Link>
          </li>
        </S.Links>
      </S.Nav>
    </>
  );
};

export default Navigation;
