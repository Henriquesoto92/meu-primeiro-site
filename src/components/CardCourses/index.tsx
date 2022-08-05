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
    imgSrc?: any;
    link: string;
    id: string;
}

const CardCourses: React.FC <Iprops> = (props) => {

    return (
        <>
            <Card 
            id={props.id}
            style={{height: '100%'}}
            >
                <CardActionArea href={props.link} target="_blank">
                    <CardMedia
                        component="img"
                        alt={props.title}
                        src={props.imgSrc}
                        height="100px"                        
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
                    <Button href={props.link} target="_blank">
                        Acessar
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CardCourses