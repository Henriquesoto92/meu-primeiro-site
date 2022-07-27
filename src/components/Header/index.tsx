import React from 'react';
import * as S from './style';  
import { foto3} from '../../assets'


const Header: React.FC = () => {

    return (
        <>
            <S.Header>
                <div>
                    <h2>Olá, me chamo </h2>
                    <h1>Henrique Soto</h1>
                    <h2><span></span> Sou o Programador Aos 30 e Desenvolvedor Front-End</h2>
                    <button>Conheça-me</button>
                </div>
                <span>
                    <img src={foto3}/>
                    <div></div>                    
                </span>
                
            </S.Header>
        </>
    )

}

export default Header