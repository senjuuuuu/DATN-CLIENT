import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  :root{
    --blue: #0056B3;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #A91E2C;
    --orange: #fd7e14;
    --yellow: #F0B400;
    --green: #18634B;
    --teal: #0056B3;
    --cyan: #17a2b8;
    --white: #ECF0F3;
    --gray: #93a5be;
    --gray-dark: #525480;
    --primary: #e6e7ee;
    --secondary: #2D4CC8;
    --success: #18634B;
    --info: #0056B3;
    --warning: #F0B400;
    --danger: #A91E2C;
    --light: #D1D9E6;
    --dark: #31344b;
    --default: #262833;
    --white: #ECF0F3;
    --gray: #44476A;
    --neutral: #ECF0F3;
    --soft: #e6e7ee;
    --black: #262833;
    --purple: #6f42c1;
    --gray-100: #f3f7fa;
    --gray-200: #fafbfe;
    --gray-300: #e6e7ee;
    --gray-400: #D1D9E6;
    --gray-500: #b1bcce;
    --gray-600: #93a5be;
    --gray-700: #66799e;
    --gray-800: #525480;
    --facebook: #3b5999;
    --dribbble: #ea4c89;
    --github: #222222;
    --behance: #0057ff;
    --twitter: #1da1f2;
    --slack: #3aaf85;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --border-sm:0.55rem;
    --border-md:1rem;
    --border-lg:2rem;
    --border-xl:10rem;
    --rounded:50%;
    
  }

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(38, 40, 51, 0);
  }
  html,body{
    width:100%;
    height:100%; 
  }
  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: var(--gray);
    text-align: left;
    background-color: ${(props) => props.theme.colors.primary};
  }
  ::-webkit-scrollbar{
      width:0.4rem;
      height:0.4rem;
  }
  ::-webkit-scrollbar-track{
    box-shadow:${(props) => props.theme.shadow_inset};
    padding:0 1px;
    border-radius:100rem;
    }
  ::-webkit-scrollbar-thumb{
    background-color: var(--gray-dark);
    border-radius:100rem;
    box-shadow:${(props) => props.theme.shadow_drop.xl};
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border: 0;
    border-top: 0.0625rem solid rgba(38, 40, 51, 0.05);
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p, ol li, ul li {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
  }
  b,
  strong {
      font-weight: 700;
  }

  small {
      font-size: 80%;
  }
  sub,
  sup {
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
  }

  sub {
      bottom: -.25em;
  }

  sup {
      top: -.5em;
  }
  [tabindex="-1"]:focus {
    outline: 0 !important;
  }
  a {
      color: var(--dark);
      text-decoration: none;
      background-color: transparent;
  }

  a:hover {
      color: var(--black);
      text-decoration: none;
  }

  a:not([href]):not([tabindex]) {
      color: inherit;
      text-decoration: none;
  }

  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
      color: inherit;
      text-decoration: none;
  }

  a:not([href]):not([tabindex]):focus {
      outline: 0;
  }
  svg {
    overflow: hidden;
    vertical-align: middle;
  }
  img {
    vertical-align: middle;
    border-style: none;
    width:100%;
    height:auto;
  }
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  button {
      border-radius: 0;
  }

  button:focus {
      /* outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color; */
  }
  
  input,
  button,
  select,
  optgroup,
  textarea {
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
  }

  button,
  input {
      overflow: visible;
  }

  button,
  select {
      text-transform: none;
  }

  select {
      word-wrap: normal;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
      -webkit-appearance: button;
  }

  button:not(:disabled),
  [type="button"]:not(:disabled),
  [type="reset"]:not(:disabled),
  [type="submit"]:not(:disabled) {
      cursor: pointer;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
      padding: 0;
      border-style: none;
  }

  input[type="radio"],
  input[type="checkbox"] {
      box-sizing: border-box;
      padding: 0;
  }

  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
      -webkit-appearance: listbox;
  }

  textarea {
      overflow: auto;
      resize: vertical;
  }

  fieldset {
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
  }
  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
      margin-bottom: 0.5rem;
      font-family: inherit;
      font-weight: 400;
      line-height: 1.3;
      color: #31344b;
  }
  h1, .h1 {
      font-size: 2.5rem;
  }

  @media (max-width: 1200px) {
      h1, .h1 {
          font-size: calc(1.375rem + 1.5vw);
      }
  }

  h2, .h2 {
      font-size: 2rem;
  }

  @media (max-width: 1200px) {
      h2, .h2 {
          font-size: calc(1.325rem + 0.9vw);
      }
  }

  h3, .h3 {
      font-size: 1.75rem;
  }

  @media (max-width: 1200px) {
      h3, .h3 {
          font-size: calc(1.3rem + 0.6vw);
      }
  }

  h4, .h4 {
      font-size: 1.5rem;
  }

  @media (max-width: 1200px) {
      h4, .h4 {
          font-size: calc(1.275rem + 0.3vw);
      }
  }

  h5, .h5 {
      font-size: 1.25rem;
  }

  h6, .h6 {
      font-size: 1rem;
  }

`;
