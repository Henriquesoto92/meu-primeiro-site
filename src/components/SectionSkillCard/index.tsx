import React from "react";
import * as S from "./style";
import SkillCard from "../SkillCard";
import {
  FaComments,
  FaCss3Alt,
  FaGitAlt,
  FaGithubSquare,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import { Grid } from "@mui/material";

const SectionSkillCard: React.FC = () => {
  const SkillsConst = [
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
    },
    {
      name: "ReactJS",
      icon: <FaReact />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
    },
    {
      name: "Material-Ui",
      icon: <SiMaterialui />,
    },
    {
      name: "GitHub",
      icon: <FaGithubSquare />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
  ];

  const MapSkill = () => {
    return (
      <>
        {SkillsConst?.map((e: any, index: number) => {
          return <SkillCard name={e.name} icon={e.icon} key={index} />;
        })}
      </>
    );
  };

  return (
    <S.Container>
      <h3>HardSkills</h3>
      <Grid
        spacing={1}
        zeroMinWidth={true}
        container
        justifyContent="space-between"
      >
        <MapSkill />
      </Grid>
    </S.Container>
  );
};

export default SectionSkillCard;
