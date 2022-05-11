import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *,html {
        font-family: 'Montserrat', sans-serif;
        font-size: calc(60% + 0.8vmin);
    }

    :root {
        --notifyCart: '#7367F0';
        --notifyBell: '#EA5455';
        --textNotify: '#FFF';
        --color-titleSidebar: '#D0D2D6';
    }
`;