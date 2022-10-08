import './header.css';
import { CustomIconButton } from '../../custom-components/icon-button/icon-button';
import { Apps, Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { UserInfo } from './user-info';
import { useDispatch } from 'react-redux';
import { setOpenPanelAction } from '../../slices/common/common-slice';

export const Header = () => {
  const dispatch = useDispatch();

  const handleClickMenu = () => {
    dispatch(setOpenPanelAction(true));
  };

  return (
    <header className="header">
      <div className="header__left-section">
        <div className="item-with-right-margin">
          <CustomIconButton onClick={handleClickMenu}>
            <Apps style={{ color: '#ffffff' }} />
          </CustomIconButton>
        </div>
        <Link to="/">
          <CustomIconButton>
            <Home style={{ color: '#ffffff' }} />
          </CustomIconButton>
        </Link>
      </div>
      <UserInfo />
    </header>
  );
};
