import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(','),
  },
});

function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Restul componentelor tale */}
    </ThemeProvider>
  );
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
