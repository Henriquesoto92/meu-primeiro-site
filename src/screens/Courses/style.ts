import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >h1 {
        margin: 20px 0;
    }

    >div {        
        width: 100%;
        padding: 20px;

        >div{
            > div{
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
                border-radius: 10px;
                height: 200px;
            }
        }
    }

`