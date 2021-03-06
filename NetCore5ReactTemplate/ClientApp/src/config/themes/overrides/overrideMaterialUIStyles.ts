import { IAppThemeColors } from "@config/themes/IAppThemeColors";
import { Overrides } from "@material-ui/core/styles/overrides";

import { overrideButton } from "./overrideButton";
import { overrideCheckbox } from "./overrideCheckbox";
import { overrideForm } from "./overrideForm";
import { overrideInput } from "./overrideInput";
import { overrideRadio } from "./overrideRadio";

export function overrideMaterialUIStyles(colors: IAppThemeColors): Overrides {
    return {
        ...overrideCheckbox(colors),
        ...overrideRadio(colors),
        ...overrideButton(colors),
        ...overrideInput(colors),
        ...overrideForm(colors),
    };
}
