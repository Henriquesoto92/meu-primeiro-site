import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTwitch,
} from "react-icons/fa";

import * as S from "./style";
import ButtonSpecial from "../ButtonSpecial";

const Footer: React.FC = () => {
    return (
        <S.Footer>
            <div>
                <S.Logo>
                    <Link to="/">
                        <img src={logo} alt="Logo footer" />
                    </Link>
                </S.Logo>

                <S.Inicio>
                    <h2>Inicio</h2>
                    <Link to="/">
                        {" "}
                        <p>Home</p>{" "}
                    </Link>
                    <Link to="/">
                        {" "}
                        <p>Cursos</p>{" "}
                    </Link>
                    <Link to="/">
                        {" "}
                        <p>Downloads</p>{" "}
                    </Link>
                </S.Inicio>

                <S.SocialMedia>
                    <S.SocialMediaImgs>
                        <a
                            href="https://github.com/Henriquesoto92"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/henriquesoto92/"
                            target="_blank"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/Henriquesoto92m/"
                            target="_blank"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.youtube.com/ProgramadorAos30"
                            target="_blank"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="https://www.twitch.tv/ProgramadorAos30"
                            target="_blank"
                        >
                            <FaTwitch />
                        </a>
                    </S.SocialMediaImgs>

                    <ButtonSpecial
                        text="Entre em Contato"
                        link="https://www.linkedin.com/messaging/thread/new?recipients=List(urn%3Ali%3Afsd_profile%3AACoAAC4AoZcBp7ua_j2t9z-m31MXBeAE7GStCeI)&composeOptionType=PREMIUM_INMAIL&controlUrn=topcard_primary_compose_message_button&referringModuleKey=NON_SELF_PROFILE_VIEW&messageComposeFlowTrackingId=PgIDSq2jR%2FCrOAmWD03qHw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B0BMH4EcOQVGhC1cl4AaRzw%3D%3D  "
                        height="3rem"
                        width="auto"
                    />
                </S.SocialMedia>
            </div>
            <S.Direitos>
                <p>© Henrique Soto. All rights reserved.</p>
            </S.Direitos>
        </S.Footer>
    );
};

export default Footer;
