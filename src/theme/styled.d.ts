// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    border_is: string;
    shadow_drop: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    shadow_inset: string;
    shadow_prm: {
      sm: string;
      md: string;
      lg: string;
    };
    colors: {
      primary: string;
      border: string;
      input: string;
    };
  }
}
