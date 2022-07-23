import styled from 'styled-components';


export const footer = styled.footer `
    border-top: 2px solid ${props => props.theme.colors.gold};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5em;
    color: ${props => props.theme.colors.white};
    background: #232526;
    background: -webkit-linear-gradient(to right, #414345, #232526);
    background: linear-gradient(to right, #414345, #232526);
    height: 300px;

    a{
        text-decoration: none;
    }
`

export const Logo = styled.div `
    img {
        max-width: 11rem;
        border-radius: 50%;
        border: 1px solid ${props => props.theme.colors.gold};
    }
`

export const inicio = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1em;

    p{
        color: white;
        font-size: 20px;
        transition: all 0.3s;
    }

    p:hover{
        transform: scale(1.05);
        color: ${props => props.theme.colors.gold};
    }

`

export const socialMedia = styled.div `
    max-width: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`

export const socialMediaImgs = styled.div `
    display: flex;
    gap: 8px;

    svg{
        font-size: 2rem;
        color: ${props => props.theme.colors.white};
        transition: 0.3s ease;
    }

    svg:hover{
        transform: scale(1.30);
        color: ${props => props.theme.colors.gold};
    }
`

export const socialMediaButton = styled.div `
    h3{
        cursor: pointer;
        width: 8rem;
        height: 2rem;
        background-color: ${props => props.theme.colors.gold};
        color: ${props => props.theme.colors.grey2};
        text-align: center;
        padding: 5px;
        border-radius: 10px;
        transition: all 0.5s;
    }

    h3:hover{
        background-color: ${props => props.theme.colors.white};
        color: black;
    }
`

export const direitos = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid ${props => props.theme.colors.gold};
    height: 50px;
    width: 100%;
    background: #232526;
    background: -webkit-linear-gradient(to right, #414345, #232526);
    background: linear-gradient(to right, #414345, #232526);

    p{
        font-size: 20px;
        color: white;
    }
`