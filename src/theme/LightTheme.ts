import { DefaultTheme } from 'styled-components';
export const LightTheme: DefaultTheme = {
  border_is:
    'linear-gradient(135.33deg, rgba(209, 217, 230, 0.05) -7.78%, rgba(255, 255, 255, 0.05) 107.66%, rgba(255, 255, 255, 0.05) 107.66%)',
  shadow_drop: {
    sm: '-3px -3px 6px #FFFFFF, 3px 3px 6px #B8B9BE',
    md: '-5px -5px 10px #FFFFFF, 5px 5px 10px #B8B9BE',
    lg: '-10px -10px 20px #FFFFFF, 10px 10px 20px #B8B9BE',
    xl: '-20px -20px 40px #FFFFFF, 20px 20px 40px #B8B9BE',
  },
  shadow_inset: 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #FFFFFF',

  shadow_prm: {
    sm: '-5px -5px 10px #FFFFFF, 5px 5px 10px #B8B9BE, inset -2px -2px 4px #B8B9BE, inset 2px 2px 10px #FFFFFF',
    md: '-10px -10px 20px #FFFFFF, 10px 10px 20px #B8B9BE, inset -3px -3px 6px #B8B9BE, inset 3px 3px 6px #FFFFFF',
    lg: '-20px -20px 40px #FFFFFF, 20px 20px 40px #B8B9BE, inset -4px -4px 8px #B8B9BE, inset 4px 4px 8px #FFFFFF',
  },
  colors: {
    primary: '#e6e7ee',
    border: '#d1d9e6',
    input: '#44476A',
  },
};
