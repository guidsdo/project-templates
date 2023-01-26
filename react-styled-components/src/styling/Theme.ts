export interface ITheme {
    globalFontFamily: string;
    globalFontSize: number;
    fontColor: string;
    backgroundColor: string;
}

export class LightTheme implements ITheme {
    globalFontSize = 11;
    backgroundColor = "white";
    fontColor = "blue";
    globalFontFamily = "Arial, Helvetica, sans-serif";
}

export const CurrentTheme = new LightTheme();
