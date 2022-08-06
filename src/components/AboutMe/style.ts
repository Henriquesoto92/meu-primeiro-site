import styled from "styled-components";

export const Header = styled.div`
    background: #1d2738;
    background: -webkit-linear-gradient(to left, #1d2738, #131a26);
    background: linear-gradient(to left, #1d2738, #131a26);
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50vh;

    > div:nth-child(2) {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-left: 20px;

        > div:nth-child(1) {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;

            > h1 {
                margin-bottom: 30px;
                font-size: 2.5rem;
                color: ${(props) => props.theme.colors.gold};
            }

            > h2 {
                margin-bottom: 30px;
                color: white;
                font-size: 20px;
                font-weight: 400;
                transition: all 0.3s;
                display: flex;
                justify-content: flex-end;
                align-items: center;

                > span {
                    height: 2px;
                    width: 30px;
                    border: 0;
                    margin-right: 10px;
                    border-radius: 1px;
                    background-color: ${(props) => props.theme.colors.gold};
                }
            }

            > button {
                background: linear-gradient(
                    90deg,
                    rgb(211, 177, 140) 0%,
                    rgb(212, 159, 99) 49%,
                    rgb(206, 139, 77) 100%
                );
                color: white;
                letter-spacing: 2px;
                width: 200px;
                font-size: 18px;
                height: 55px;
                font-weight: 600;
                text-align: center;
                padding: 5px;
                border-radius: 5rem;
                transition: all 1s;
                border: none;

                :hover {
                    color: black;
                    -webkit-animation: color-change-3x 2s linear alternate both;
                    animation: color-change-3x 2s linear alternate;
                }
            }
        }
        > div:nth-child(2) {
            width: 100%;
            > h1 {
                width: 100%;
                margin-bottom: 30px;
                font-size: 2.5rem;
                color: ${(props) => props.theme.colors.gold};
            }
            > div {
                width: 100%;
                height: 100%;
                gap: 20px;
            }
        }
        > div:nth-child(3) {
            width: 100%;
            > h1 {
                width: 100%;
                margin-bottom: 30px;
                font-size: 2.5rem;
                color: ${(props) => props.theme.colors.gold};
            }
        }

        > div:nth-child(4) {
        }
        > span {
            width: 800px;
            height: 100%;
            margin-right: 10vw;
            position: relative;
            overflow: hidden;
            z-index: 9;
            display: flex;
            align-items: flex-start;
            justify-content: center;

            > img {
                width: auto;
                height: 100%;
                background-size: cover;
                transition: 1s;
                position: absolute;
                z-index: 9;
            }
            > div {
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 10;
                opacity: 0.5;
                background-color: ${(props) => props.theme.colors.black};
            }

            > img:hover {
                width: 50%;
                filter: blur(0px);
                -webkit-filter: blur(0px);
            }
        }
    }
`;

export const Frame = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${(props) => props.theme.colors.black};
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    > div > img {
        width: 100%;
        padding: 20px;
        background-image: cover;
        border-radius: 10px;
    }
`;
