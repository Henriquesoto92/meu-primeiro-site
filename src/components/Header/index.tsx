import React from "react";
import * as S from "./style";
import { fotoProfile } from "../../assets";
import ButtonSpecial from "../ButtonSpecial";

const Header: React.FC = () => {
  return (
    <S.Header>
      <div>
        <h2>Olá, me chamo </h2>
        <h1>Henrique Soto</h1>
        <h2>
          <span></span> Sou o Programador Aos 30 e Desenvolvedor Front-End
        </h2>
        <ButtonSpecial
          text="Saiba mais..."
          link="https://www.linkedin.com/messaging/thread/new?recipients=List(urn%3Ali%3Afsd_profile%3AACoAAC4AoZcBp7ua_j2t9z-m31MXBeAE7GStCeI)&composeOptionType=PREMIUM_INMAIL&controlUrn=topcard_primary_compose_message_button&referringModuleKey=NON_SELF_PROFILE_VIEW&messageComposeFlowTrackingId=PgIDSq2jR%2FCrOAmWD03qHw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B0BMH4EcOQVGhC1cl4AaRzw%3D%3D  "
          height="3rem"
          width="auto"
        />
      </div>
      <span>
        <img src={fotoProfile} />
        <div></div>
      </span>
    </S.Header>
  );
};

export default Header;
