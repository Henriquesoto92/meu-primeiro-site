import React from 'react';
import { 
    Header,
    AboutMe,
    SectionSkill, 
} from '../../components';
import * as S from './style';  

const Home: React.FC = () => {

    return (
        <S.Container>
            <Header/>
            <AboutMe/>
            <SectionSkill/>
        </S.Container>
    )

}

export default Home