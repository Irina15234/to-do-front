import './header.css';
import { CustomIconButton } from "../../custom-components/icon-button/icon-button";
import { Apps } from "@material-ui/icons";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__panel">
        <CustomIconButton>
          <Apps />
        </CustomIconButton>
      </div>
      <div className="header__user-block">

      </div>
    </header>
  );
}