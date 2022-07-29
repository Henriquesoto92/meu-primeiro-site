import * as S from "./style";
import * as react from "react";
import { 
    Button, 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia 
} from "@mui/material";

interface Iprops {
    title: string;
    text: string;
    imgSrc?: string;
    imgAlt?: string;
    link: string;
    id: string;
}

const CardCourses: React.FC <Iprops> = (props) => {

    return (
        <>
            <Card id={props.id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.imgAlt}
                        src={props.imgSrc}
                    />
                    <CardContent>
                        <S.Title>{props.title}</S.Title>
                        <S.Text>{props.text}</S.Text>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button>
                        Compartilhar
                    </Button>
                    <Button href={props.link}>
                        Acessar
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CardCourses