import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            sidebar: string;
            navBar: string;
            text: string;
            border: string;
            check: string;
        }
    }
}