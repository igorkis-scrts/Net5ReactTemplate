import { IBorderColor } from "@config/themes/colors/IBorderColor";
import { IButtonColor } from "@config/themes/colors/IButtonColor";
import { IColor } from "@config/themes/colors/IColor";
import { ITextColor } from "@config/themes/colors/ITextColor";

export interface IAppThemeColors {
    default: IButtonColor;
    primary: IButtonColor;
    secondary: IButtonColor;
    destructive: IButtonColor;

    success: IColor;
    info: IColor;
    warning: IColor;
    error: IColor;

    text: ITextColor;
    border: IBorderColor;

    background: string;
    surface: string;
}
