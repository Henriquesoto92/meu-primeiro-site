import styled from "styled-components";

export const Footer = styled.footer`
    border-top: 2px solid ${(props) => props.theme.colors.gold};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.black};
    background: -webkit-linear-gradient(
        to left,
        ${(props) => props.theme.colors.black},
        ${(props) => props.theme.colors.black2}
    );
    background: linear-gradient(
        to left,
        ${(props) => props.theme.colors.black},
        ${(props) => props.theme.colors.black2}
    );
    height: 30vh;

    > div:nth-child(1) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 25vh;
        width: 100%;
    }

    a {
        text-decoration: none;
    }
`;

export const Logo = styled.div`
    img {
        max-width: 11rem;
        border-radius: 50%;
        border: 1px solid ${(props) => props.theme.colors.gold};
    }
`;

export const Inicio = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    p {
        color: white;
        font-size: 20px;
        transition: all 0.3s;
    }

    p:hover {
        transform: scale(1.05);
        color: ${(props) => props.theme.colors.gold};
    }
`;

export const SocialMedia = styled.div`
    max-width: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`;

export const SocialMediaImgs = styled.div`
    display: flex;
    gap: 8px;

    svg {
        font-size: 2rem;
        color: ${(props) => props.theme.colors.white};
        transition: 0.3s ease;
    }

    svg:hover {
        transform: scale(1.3);
        color: ${(props) => props.theme.colors.gold};
    }
`;

export const SocialMediaButton = styled.button`
    cursor: pointer;
    width: 8rem;
    height: 2rem;
    background-color: ${(props) => props.theme.colors.gold};
    color: ${(props) => props.theme.colors.grey2};
    text-align: center;
    padding: 5px;
    border-radius: 10px;
    transition: all 0.5s;

    :hover {
        background-color: ${(props) => props.theme.colors.white};
        color: black;
    }
`;

export const Direitos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid ${(props) => props.theme.colors.gold};
    height: 50px;
    width: 100%;
    background: ${(props) => props.theme.colors.black};
    background: -webkit-linear-gradient(
        to left,
        ${(props) => props.theme.colors.black},
        ${(props) => props.theme.colors.black2}
    );
    background: linear-gradient(
        to left,
        ${(props) => props.theme.colors.black},
        ${(props) => props.theme.colors.black2}
    );

    p {
        font-size: 20px;
        color: white;
    }
`;
