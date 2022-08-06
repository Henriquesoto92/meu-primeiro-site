import React from "react";
import SkillCard from "../SkillCard";
// import { SkillsConst } from "../../constant";
import { FaComments, FaJsSquare } from "react-icons/fa";
import * as S from "./style";

const SectionSkillCard: React.FC = () => {
    const SkillsConst = [
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
                {
                    name: "React",
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
                {
                    name: "trabalho em grupo",
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
                {SkillsConst?.map((id: any, index: number) => {
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
        <S.Container>
            <h1>SoftSkills</h1>
            <MapSkill TypeSkill="SoftSkills" />
            <h1>HardSkills</h1>
            <MapSkill TypeSkill="HardSkills" />
        </S.Container>
    );
};

export default SectionSkillCard;
