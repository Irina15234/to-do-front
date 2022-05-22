import React from 'react';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './contexts/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// reportWebVitals(console.log);
