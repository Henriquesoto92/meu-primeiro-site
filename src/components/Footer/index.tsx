import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';
import { 
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTwitch
} from "react-icons/fa";


import * as S from './style';  

const Footer: React.FC = () => {

    return (
        <>
            <S.footer>

                <S.Logo>
                    <Link to="/">
                        <img src={logo} alt="Logo footer"/>
                    </Link>
                </S.Logo>

                <S.inicio>
                    <h2>Inicio</h2>
                    <Link to="/"> <p>Home</p> </Link>
                    <Link to="/"> <p>Cursos</p> </Link>
                    <Link to="/"> <p>Downloads</p> </Link>
                </S.inicio>

                <S.socialMedia>
                    <S.socialMediaImgs>
                        <a href="https://github.com/Henriquesoto92" target="_blank">
                             <FaGithub/>    
                        </a> 
                        <a href="https://www.linkedin.com/in/henriquesoto92/" target="_blank"> 
                        <FaLinkedin/>  
                        </a> 
                        <a href="https://www.instagram.com/Henriquesoto92m/" target="_blank"> <FaInstagram/> 
                        </a> 
                        <a href="https://www.youtube.com/ProgramadorAos30" target="_blank"> <FaYoutube/>   
                        </a> 
                        <a href="https://www.twitch.tv/ProgramadorAos30" target="_blank"> <FaTwitch/> 
                        </a> 
                    </S.socialMediaImgs>

                    <S.socialMediaButton>
                        <h3>Contato</h3>
                    </S.socialMediaButton>
                </S.socialMedia>
                

            </S.footer>

            <S.direitos>
                <p>© Henrique Soto. All rights reserved.</p>
            </S.direitos>
        </>
    )

}

export default Footer