import React from "react";
import { Grid } from "@mui/material";

interface Iprops {
  name: string;
  icon: any;
}

const SkillCard: React.FC<Iprops> = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
      {props.icon}
      <p>{props.name}</p>
    </Grid>
  );
};

export default SkillCard;
