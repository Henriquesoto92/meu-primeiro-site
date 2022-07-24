import styled from 'styled-components';

export const Nav = styled.nav `
margin-bottom: 500px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 5em;
height: 7rem;
background: #232526;
background: -webkit-linear-gradient(to right, #414345, #232526);
background: linear-gradient(to right, #414345, #232526);
`

export const Logo = styled.div `
    h1{
        font-size: 2.5em;
        color: ${props => props.theme.colors.gold};
    }
`

export const Links = styled.ul `
    display: flex;
    gap: 1em;

    li{
        list-style: none;
        font-size: 1.5em;
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
