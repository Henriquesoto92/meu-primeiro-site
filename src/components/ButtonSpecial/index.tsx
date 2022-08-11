import React from "react";
import * as S from "./style";

interface Iprops {
    text: string;
    link: any;
    width: string;
    height?: string;
}

const ButtonSpecial: React.FC<Iprops> = (props) => {
    return (
        <>
            <S.Button type="button" width={props.width} height={props.height}>
                {props.text}
            </S.Button>
        </>
    );
};

export default ButtonSpecial;
