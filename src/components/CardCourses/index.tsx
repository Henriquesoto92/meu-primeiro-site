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
    imgSrc: string;
    imgAlt: string;
    link: string;
}

const CardCourses: React.FC <Iprops> = (props) => {

    return (
        <>
            <Card>
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
                    <Button>
                        Acessar
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CardCourses