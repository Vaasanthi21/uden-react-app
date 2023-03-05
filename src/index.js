import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { AppColors } from './utils/consts/app_colors';
import { getTypography } from './utils/helper';

const container = document.getElementById('root');
const root = createRoot(container);
const theme = createTheme({
  palette: {
    primary: {
      main: AppColors.PRIMARY_MAIN,
    },
  },
  typography:getTypography()
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

