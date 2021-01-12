import { IAppThemeColors } from "@config/themes/IAppThemeColors";
import { Overrides } from "@material-ui/core/styles/overrides";

export function overrideForm(colors: IAppThemeColors): Overrides {
    return {
        MuiFormControlLabel: {
            root: {
                marginBottom: 0,
            },
        },

        MuiFormLabel: {
            root: {
                color: colors.text.medium,
                "&$disabled": {
                    color: colors.text.disabled,
                },
            },
        },
    };
}
