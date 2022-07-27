import styled from 'styled-components';

export const Nav = styled.nav `
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 5rem;
height: 10vh;
background: ${props => props.theme.colors.black};
background: -webkit-linear-gradient(to left, ${props => props.theme.colors.black}, ${props => props.theme.colors.black2});
background: linear-gradient(to left, ${props => props.theme.colors.black}, ${props => props.theme.colors.black2});
border-bottom: 2px solid ${props => props.theme.colors.gold};
`

export const Logo = styled.div `
    h1{
        font-size: 2.5rem;
        color: ${props => props.theme.colors.gold};
    }
`

export const Links = styled.ul `
    display: flex;
    gap: 1rem;

    li{
        list-style: none;
        font-size: 1.5rem;
        transition: all 0.3s;
    }

    li a {
        color: white;
        letter-spacing: 2px;
    }

    li:hover{
        transform: scale(1.08);
    }

    a{
        text-decoration: none;
    }

    a:hover{
        color: ${props => props.theme.colors.gold};
    }
`
