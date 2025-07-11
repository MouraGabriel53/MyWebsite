import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

:root {
  --primary: rgba(15, 240, 252, 1);
  --secondary: rgba(30, 30, 30, 1);
  --complement-one: rgba(241, 241, 241, 1);
  --complement-two: rgba(159, 94, 255, 1);
  --gold-highlight: rgba(255, 223, 94, 1);
  --light-highlight: rgba(255, 255, 255, 0.2);
  --special: linear-gradient(180deg, #9F5EFF 0%, #0FF0FC 100%);

  --font-title: 'Titillium Web', sans-serif;
  --font-body: 'Inter', sans-serif;
}

body {
  background: var(--secondary);
}
`