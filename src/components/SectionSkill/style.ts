import styled from 'styled-components';
import { foto, foto2 } from '../../assets'



export const Header = styled.div `
    background: ${props => props.theme.colors.black};
    background: -webkit-linear-gradient(to left, ${props => props.theme.colors.black}, ${props => props.theme.colors.black2});
    background: linear-gradient(to left, ${props => props.theme.colors.black}, ${props => props.theme.colors.black2});
    display:  flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;

    >div{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        margin-left: 10vw;
        
        >h1{
            margin-bottom: 30px;
            font-size: 2.5rem;
            color: ${props => props.theme.colors.gold};
        }

        >h2{
            margin-bottom: 30px;
            color: white;
            font-size: 20px;
            font-weight: 400;
            transition: all 0.3s;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            >span {
                height: 2px;
                width: 30px;
                border: 0;
                margin-right: 10px;
                border-radius: 1px;
                background-color: ${props => props.theme.colors.gold};
            }
        }

        >button{
            background: linear-gradient(90deg, rgb(211, 177, 140) 0%, rgb(212, 159, 99) 49%, rgb(206, 139, 77) 100%);
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
        
            
            :hover{
                color: black;
                -webkit-animation: color-change-3x 2s linear  alternate both;
                animation: color-change-3x 2s linear  alternate;
            }
            
            
            @-webkit-keyframes color-change-3x {
                0% {
                    background: linear-gradient(90deg, #d4b593, #d6a369, #a8723f);
                }
                50% {
                    background: linear-gradient(90deg, #a8723f,  #d4b593, #d6a369);
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
                    background: linear-gradient(90deg, #a8723f,  #d4b593, #d6a369);
                }
                100% {
                    background: linear-gradient(90deg, #d6a369, #a8723f, #d4b593);
                }
            }
        }
    }

    >span {
        width: 800px;
        height: 100%;
        margin-right: 10vw;
        position: relative;
        overflow: hidden;
        z-index: 9;
        display: flex;
        align-items: flex-start;
        justify-content: center;

        >img {
            width:auto;
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
            background-color: ${props => props.theme.colors.black};
        }

        >img:hover {
        width: 50%;
        filter: blur(0px);
        -webkit-filter: blur(0px);    
    }
   
}
`