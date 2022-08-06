import { Grid } from "@mui/material";
import React from "react";
import { foto } from "../../assets/index";
import SectionSkillCard from "../SectionSkillCard";
import * as S from "./style";

const AboutMe: React.FC = () => {
    return (
        <S.Header>
            <S.Frame>
                <div>
                    <img src={foto} />
                </div>
            </S.Frame>
            <Grid container>
                <Grid item>
                    <h2>
                        <span></span>Sobre Mim
                    </h2>
                    <h1>Henrique Soto</h1>
                    <h2>Sou o Programador Aos 30 e Desenvolvedor Front-End</h2>
                </Grid>
                <SectionSkillCard />
                <button>Conheça-me</button>
            </Grid>
        </S.Header>
    );
};

export default AboutMe;
