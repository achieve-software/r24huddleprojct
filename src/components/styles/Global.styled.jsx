import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
      
      * {
        box-sizing: border-box;
    }    body {
        background-color: lightcoral;
        color: salmon;
        font-family:"Poppins", sans-serif ;
        font-size: 1.15rem ;
    }`
    export default GlobalStyles