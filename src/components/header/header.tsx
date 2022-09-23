import './header.css';
import { CustomIconButton } from '../../custom-components/icon-button/icon-button';
import { Apps, Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../slices/types';
import { useEffect } from 'react';
import { getUserInfo } from '../../services/auth';
import { setUserAction } from '../../slices/user/user-slice';

export const Header = () => {
  const dispatch = useDispatch();

  const handleClickMenu = () => {
    // menu open
  };

  const user = useSelector((state: State) => state.user);

  useEffect(() => {
    getUserInfo().then((res) => {
      dispatch(setUserAction(res));
    });
  }, [dispatch]);

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
      <div className="header__user-block">
        <div className="header__user-name">{user.name}</div>
        <div className="header__user-img-container">
          <img
            src="https://catherineasquithgallery.com/uploads/posts/2021-03/thumbs/1614761198_31-p-vanilnii-fon-36.jpg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};
