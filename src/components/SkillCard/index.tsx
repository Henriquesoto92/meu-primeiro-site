import { Grid, Rating, styled } from "@mui/material";
import React from "react";
import * as S from "./style";

interface Iprops {
    name: string;
    level: number;
    icon: any;
}

const StyledRating = styled(Rating)({
    " .MuiRating-root": {
        width: "200px",
        gap: "0.5vh",
    },
    "& .MuiRating-iconFilled": {
        color: "#d49e51",
    },
    "& .MuiRating-iconEmpty": {
        color: "hsl(209, 28%, 39%)",
    },
});

const SkillCard: React.FC<Iprops> = (props) => {
    return (
        <Grid item xs={1} sm={1} md lg xl>
            <S.Container>
                <p>{props.name}</p>
                <StyledRating
                    value={props.level}
                    icon={props.icon}
                    emptyIcon={props.icon}
                    readOnly
                />
            </S.Container>
        </Grid>
    );
};

export default SkillCard;
