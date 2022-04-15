import './header.css';
import { CustomIconButton } from '../../custom-components/icon-button/icon-button';
import { Apps, Home } from '@mui/icons-material';

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
        <img
          src="https://catherineasquithgallery.com/uploads/posts/2021-03/thumbs/1614761198_31-p-vanilnii-fon-36.jpg"
          alt=""
        />
      </div>
    </header>
  );
};
