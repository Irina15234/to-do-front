import { CustomThemeSwitcher } from '../../../custom-components/switchers/theme-switcher';

export const ThemeBlock = () => {
  return (
    <div className="side-panel__block-item theme-block">
      <div className="theme-block__title">Theme</div>
      <div className="theme-block__toggle-container">
        <CustomThemeSwitcher />
      </div>
    </div>
  );
};
