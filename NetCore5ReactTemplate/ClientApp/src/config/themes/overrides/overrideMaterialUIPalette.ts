import { IAppThemeColors } from "@config/themes/IAppThemeColors";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

export function overrideMaterialUIPalette(colors: IAppThemeColors): PaletteOptions {
    return {
        primary: {
            main: colors.primary.main,
        },
        secondary: {
            main: colors.secondary.main,
        },
        error: {
            main: colors.error.main,
        },
        background: {
            default: colors.background,
        },
    };
}
