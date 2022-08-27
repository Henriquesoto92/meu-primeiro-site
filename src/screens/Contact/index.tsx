import { FormControl, TextField } from "@mui/material";

import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { ButtonSpecial } from "../../components";
import * as S from "./style";
import { postForm, useGetDataForm } from "../../services/hooks/useForm";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const useForm = useGetDataForm();
  const mutation = postForm();

  // useEffect(() => {
  //   mutation.mutate({
  //     name: "Henrique Soto",
  //     email: "henriquesoto92@gmail.com",
  //     phone: "51 99999-9999",
  //     message: "lorem ipstum",
  //   });
  // }, []);

  const teste = () => {
    mutation.mutate({ name, email, phone, message });
  };

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
          <ButtonSpecial
            text="Chat no Linkedin"
            link="https://www.linkedin.com/messaging/thread/new?recipients=List(urn%3Ali%3Afsd_profile%3AACoAAC4AoZcBp7ua_j2t9z-m31MXBeAE7GStCeI)&composeOptionType=PREMIUM_INMAIL&controlUrn=topcard_primary_compose_message_button&referringModuleKey=NON_SELF_PROFILE_VIEW&messageComposeFlowTrackingId=PgIDSq2jR%2FCrOAmWD03qHw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B0BMH4EcOQVGhC1cl4AaRzw%3D%3D  "
            height="3rem"
            width="auto"
          />
        </S.SocialMedia>
        <S.FormContainer
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            teste();
          }}
        >
          {/* onSubmit={} */}
          <FormControl>
            <TextForm
              label="Nome"
              type="text"
              value={name}
              onChange={(state: any) => setName(state.target.value)}
            />
            <br />
            <TextForm
              label="E-mail"
              type="email"
              value={email}
              onChange={(state: any) => setEmail(state.target.value)}
            />
            <br />
            <TextForm
              label="Telefone"
              type="text"
              value={phone}
              onChange={(state: any) => setPhone(state.target.value)}
            />
            <br />
            <TextForm
              label="Mensagem"
              type="text"
              value={message}
              onChange={(state: any) => setMessage(state.target.value)}
            />
            <br />
            <ButtonSpecial
              text="Entre em Contato"
              link="https://www.linkedin.com/messaging/thread/new?recipients=List(urn%3Ali%3Afsd_profile%3AACoAAC4AoZcBp7ua_j2t9z-m31MXBeAE7GStCeI)&composeOptionType=PREMIUM_INMAIL&controlUrn=topcard_primary_compose_message_button&referringModuleKey=NON_SELF_PROFILE_VIEW&messageComposeFlowTrackingId=PgIDSq2jR%2FCrOAmWD03qHw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B0BMH4EcOQVGhC1cl4AaRzw%3D%3D  "
              height="3rem"
              width="auto"
            />
          </FormControl>
        </S.FormContainer>
      </div>
    </S.Container>
  );
};

interface TextFormProps {
  label: string;
  type: string;
  value: any;
  onChange?: any;
}

const TextForm = ({ label, type, value, onChange }: TextFormProps) => {
  return (
    <TextField
      type={type}
      id={label}
      label={label}
      value={value}
      onChange={onChange}
      required
      multiline
      sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
    />
  );
};

export default Contact;
