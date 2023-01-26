import "styled-components";

import { ITheme } from "../styling/Theme";

// Do this to get a typed theme everywhere in the app instead of 'any'
declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}
