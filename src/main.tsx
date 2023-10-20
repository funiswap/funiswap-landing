import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { injectGlobal, ThemeProvider, theme } from './theme';
import App from './App';

injectGlobal`
    * { margin: 0; padding: 0; }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app'),
);
