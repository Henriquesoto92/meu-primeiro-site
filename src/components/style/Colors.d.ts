import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary1: string;
            primary2: string;
            primary3: string;
            primary4: string;
            /* primary/main color */
            primary5: string;
            /* lighter shades of primary color */
            primary6: string;
            primary7: string;
            primary8: string;
            primary9: string;
            primary10: string;
            /* darkest grey - used for headings */
            grey1: string;
            grey2: string;
            grey3: string;
            grey4: string;
            /* grey used for paragraphs */
            grey5: string;
            grey6: string;
            grey7: string;
            grey8: string;
            grey9: string;
            grey10: string;
            white: string;
            reddark: string;
            redlight: string;
            greendark: string;
            greenlight: string;
            gold: string;
            blue: string;
            blue2: string;
            black: string;
            black2: string;
            BlackBackground: string;
        };
    }
}
