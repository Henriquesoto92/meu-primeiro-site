import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { ButtonSpecial } from "../../components";
import * as S from "./style";

const data = [{ label: "name" }];

const Contact: React.FC = () => {
  return (
    <S.Container>
      <h1>Contato</h1>
      <div>
        <S.SocialMedia>
          <p>Onde me encontrar</p>
          <h2>Redes Sociais</h2>
          <S.SocialMediaImgs>
            <a href="https://github.com/Henriquesoto92" target="_blank">
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
            <a href="https://www.youtube.com/ProgramadorAos30" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://www.twitch.tv/ProgramadorAos30" target="_blank">
              <FaTwitch />
            </a>
          </S.SocialMediaImgs>
        </S.SocialMedia>

        <FormControl component={"form"}>
          <TextForm label={"Nome"} />
          <br />
          <TextForm label={"E-mail"} />
          <br />
          <TextForm label={"Telefone"} />
          <br />
          <TextForm label={"Mensagem"} />
          <br />
          <ButtonSpecial
            text="Entre em Contato"
            link="https://www.linkedin.com/messaging/thread/new?recipients=List(urn%3Ali%3Afsd_profile%3AACoAAC4AoZcBp7ua_j2t9z-m31MXBeAE7GStCeI)&composeOptionType=PREMIUM_INMAIL&controlUrn=topcard_primary_compose_message_button&referringModuleKey=NON_SELF_PROFILE_VIEW&messageComposeFlowTrackingId=PgIDSq2jR%2FCrOAmWD03qHw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B0BMH4EcOQVGhC1cl4AaRzw%3D%3D  "
            height="3rem"
            width="auto"
          />
          teste
        </FormControl>
      </div>
    </S.Container>
  );
};

interface TextFormProps {
  label: string;
}

const TextForm = ({ label }: TextFormProps) => {
  return (
    <TextField
      id={label}
      label={label}
      multiline
      sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
    />
  );
};

export default Contact;
