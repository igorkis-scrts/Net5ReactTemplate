import { IAppThemeColors } from "@config/themes/IAppThemeColors";
import { Overrides } from "@material-ui/core/styles/overrides";

export function overrideRadio(colors: IAppThemeColors): Overrides {
    return {
        MuiRadio: {
            root: {
                padding: 12,
            },
            colorPrimary: {
                "&$checked": {
                    color: colors.primary.main,
                },
            },
            colorSecondary: {
                "&$checked": {
                    color: colors.secondary.main,
                },
            },
        },
    };
}
