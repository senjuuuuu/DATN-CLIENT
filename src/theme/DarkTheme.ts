import { DefaultTheme } from 'styled-components';
export const DarkTheme: DefaultTheme = {
  border_is: 'linear-gradient(135.22deg, rgba(49, 52, 75, 0.05) -10.03%, rgba(255, 255, 255, 0.05) 106.09%)',
  shadow_drop: {
    sm: '-3px -3px 6px rgba(255, 255, 255, 0.05, 3px 3px 6px rgba(0, 0, 0, 0.5)',
    md: '-5px -5px 10px rgba(255, 255, 255, 0.05), 5px 5px 15px rgba(0, 0, 0, 0.5)',
    lg: '-10px -10px 20px rgba(255, 255, 255, 0.05), 10px 10px 20px rgba(0, 0, 0, 0.5)',
    xl: '-20px -20px 40px rgba(255, 255, 255, 0.05), 20px 20px 40px rgba(0, 0, 0, 0.5)',
  },
  shadow_inset: 'inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8)',

  shadow_prm: {
    sm: '-5px -5px 10px rgba(255, 255, 255, 0.05), 5px 5px 15px rgba(0, 0, 0, 0.5), inset 2px 2px 4px rgba(255, 255, 255, 0.05), inset -2px -2px 4px rgba(0, 0, 0, 0.5)',
    md: '-10px -10px 20px rgba(255, 255, 255, 0.05), 10px 10px 20px rgba(0, 0, 0, 0.5), inset -3px -3px 6px rgba(0, 0, 0, 0.5), inset 3px 3px 6px rgba(255, 255, 255, 0.15)',
    lg: '-20px -20px 40px rgba(255, 255, 255, 0.05), 20px 20px 40px rgba(0, 0, 0, 0.5), inset -4px -4px 8px rgba(0, 0, 0, 0.5), inset 4px 4px 8px rgba(255, 255, 255, 0.15)',
  },
  colors: {
    primary: '#131419',
    border: '#31344B',
    input: '#03a9f4',
  },
};
