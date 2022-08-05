import { Grid } from '@mui/material';
import React from 'react';
import {CardCourses} from '../../components/index';
import { trilhaInfo } from '../../assets';
import * as S from './style';  

const Courses: React.FC = () => {

const cursos =[
    {
        title: 'RocketSeat',
        text: 'O mapa completo para você impulsionar sua evolução e acessar as melhores oportunidades da sua carreiracomo dev.',
        imgSrc: 'https://t2.tudocdn.net/572277?w=646&h=284',
        link: "https://www.rocketseat.com.br/",   
    }, 
    {  
        title: 'Curso em video',
        text: ' Lançado em 2013, o projeto de ensinar tecnologia à distância foi ganhando forma e hoje já conta com milhares de alunos inscritos e uma grande quantidade de material gratuito.',
        imgSrc: 'https://www.cursoemvideo.com/wp-content/uploads/2019/08/cursoemvideo-logo.png',
        link: "https://www.cursoemvideo.com/cursos/",
    },
    {  
        title: 'DIO - Digital Innovation One',
        text: 'Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio        profissional, evoluindo em comunidade com os melhores experts.',
        imgSrc: 'https://yt3.ggpht.com/qMPyLWsg6kipqVXeVUmusXfNABJGAWignNcYfS7jlEXLsD44PU3dVSFlf8e4sMXTAJKExbDREw=s900-c-k-c0x00ffffff-no-rj',
        link: "https://www.dio.me",
    },
    {  
        title: 'Trilha Info',
        text: 'Não sabe por onde começar a estudar? Que tal dar uma olhada por aqui? Lendo de cima pra baixo, cada "caixa" é um assunto a ser estudado. Clicando, você verá em mais detalhes o que estudar com links de conteúdos gratuitos produzidos por pessoas que dominam a área e te ajudarão nessa jornada!',
        imgSrc: `${trilhaInfo}`,
        link: "https://www.trilha.info/",
    }
]
    return (
        <S.Container>
            <h1>
                Cursos Gratuitos
            </h1>
            <Grid 
                container
                spacing={4}
                flex-wrap='noWrap'
            >
            {cursos?.map((id: any, index: number) =>{
                return (                    
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={3}>
                        <CardCourses
                            title={id.title}
                            text={id.text}
                            imgSrc={id.imgSrc}
                            link={id.link}
                            id={`${index}${id.title}`}
                        />
                    </Grid>                    
                )                
            })}
            </Grid>
            <h1>
                Aqui vai ter um formulario que tu vai poder mandar um curso gratis pra galera
            </h1>
        </S.Container>
    )

}

export default Courses