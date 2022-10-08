import { useContext } from 'react';
import { ThemeContext, themes } from '../../../contexts/ThemeContext';

export const ThemeBlock = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  return (
    <div className="side-panel__block theme-block">
      <div className="theme-block__title">Theme</div>
      <div className="theme-block__toggle-container">
        <div className="theme-block__toggle-title">{theme}</div>
        <div className="theme-block__toggle" role="button" tabIndex={-1} onClick={toggleTheme}></div>
      </div>
    </div>
  );
};
