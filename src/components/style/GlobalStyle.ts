import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

html {
    scroll-behavior: smooth;
}

button {
    cursor: pointer;
}

*:focus {
    outline: none !important;
}

select {
    outline: none !important;
    border: 0.5px solid #AFAFAF !important;
    border-radius: 8px;
}

input{
    border: 0.5px solid #AFAFAF !important;
    border-radius: 8px;
}

input[type='radio'], input[type='checkbox'] {
    accent-color: #1773E2;
    width: 20px;
    height: 20px;
}

fieldset {
    border: none;
}

img {
    pointer-events: none;
}

`