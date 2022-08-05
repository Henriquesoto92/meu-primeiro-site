import { Grid } from "@mui/material";
import React from "react";
import { FaComments, FaJsSquare } from "react-icons/fa";
import SkillCard from "../SkillCard";
import { foto } from "../../assets/index";
import * as S from "./style";

const AboutMe: React.FC = () => {
    const Skills = [
        {
            name: "HardSkills",
            skill: [
                {
                    name: "JavaScript",
                    level: 4,
                    icon: <FaJsSquare fontSize="inherit" />,
                },
                {
                    name: "React",
                    level: 4,
                    icon: <FaJsSquare fontSize="inherit" />,
                },
            ],
        },
        {
            name: "SoftSkills",
            skill: [
                {
                    name: "Comunicação",
                    level: 4,
                    icon: <FaComments fontSize="inherit" />,
                },
                {
                    name: "trabalho em grupo",
                    level: 4,
                    icon: <FaComments fontSize="inherit" />,
                },
            ],
        },
    ];

    const MapSkill = ({ TypeSkill }: any) => {
        return (
            <>
                {Skills?.map((id: any, index: number) => {
                    if (id.name === TypeSkill) {
                        return (
                            <>
                                {id.skill?.map((e: any, index: number) => {
                                    return (
                                        <SkillCard
                                            name={e.name}
                                            level={e.level}
                                            icon={e.icon}
                                            key={index}
                                        />
                                    );
                                })}
                            </>
                        );
                    }
                })}
            </>
        );
    };

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
                <Grid item container>
                    <h1>SoftSkills</h1>
                    <MapSkill TypeSkill="SoftSkills" />
                </Grid>
                <Grid item xs sm md lg xl container>
                    <h1>HardSkills</h1>
                    <MapSkill TypeSkill="HardSkills" />
                </Grid>
                <Grid item xs sm md lg xl container>
                    <button>Conheça-me</button>
                </Grid>
            </Grid>
        </S.Header>
    );
};

export default AboutMe;
