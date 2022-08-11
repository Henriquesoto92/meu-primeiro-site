import styled from "styled-components";

export const Button = styled.button<{ width?: string; height?: string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: 1rem 0;
    padding: 0.5rem 2rem;
    background: linear-gradient(
        90deg,
        rgb(211, 177, 140) 0%,
        rgb(212, 159, 99) 50%,
        rgb(206, 139, 77) 100%
    );
    color: white;
    letter-spacing: 0.15rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    border-radius: 2rem;
    transition: all 1s;
    border: none;

    :hover {
        color: black;
        -webkit-animation: color-change-3x 2s linear alternate both;
        animation: color-change-3x 2s linear alternate;
    }

    @-webkit-keyframes color-change-3x {
        0% {
            background: linear-gradient(90deg, #d4b593, #d6a369, #a8723f);
        }
        50% {
            background: linear-gradient(90deg, #a8723f, #d4b593, #d6a369);
        }
        100% {
            background: linear-gradient(90deg, #d6a369, #a8723f, #d4b593);
        }
    }
    @keyframes color-change-3x {
        0% {
            background: linear-gradient(90deg, #d4b593, #d6a369, #a8723f);
        }
        50% {
            background: linear-gradient(90deg, #a8723f, #d4b593, #d6a369);
        }
        100% {
            background: linear-gradient(90deg, #d6a369, #a8723f, #d4b593);
        }
    }
`;
