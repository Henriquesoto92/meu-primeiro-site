import React from 'react';
import { logo } from '../../assets';
import * as S from './style'; 
import { Link } from 'react-router-dom';



const Navigation: React.FC = () => {

    return (
        <>
            <S.Nav>
                <S.Logo>
                    <Link to="/">
                        <img src={logo} alt="Logo"/>
                    </Link>
                </S.Logo>
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
                <S.Icons>
                    icones aqui
                </S.Icons>
            </S.Nav>
            
        </>
    )

}

export default Navigation