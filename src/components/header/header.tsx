import './header.css';
import { CustomIconButton } from '../../custom-components/icon-button/icon-button';
import { Apps, Home } from '@material-ui/icons';

export const Header = () => {
  const handleClickMenu = () => {
    // menu open
  };

  return (
    <header className="header">
      <div className="header__left-section">
        <div className="item-with-right-margin">
          <CustomIconButton onClick={handleClickMenu}>
            <Apps style={{ color: '#ffffff' }} />
          </CustomIconButton>
        </div>
        <CustomIconButton>
          <Home style={{ color: '#ffffff' }} />
        </CustomIconButton>
      </div>
      <div className="header__user-block">
        <img src="https://avatanplus.com/files/resources/mid/5e634fd5c1002170b3efdb1f.jpg" alt="" />
      </div>
    </header>
  );
};
