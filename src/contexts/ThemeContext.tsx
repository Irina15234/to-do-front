import React from 'react';

export const themes = {
  dark: 'dark',
  light: 'light'
};

const defaultValue: any = {};

export const ThemeContext = React.createContext(defaultValue);
