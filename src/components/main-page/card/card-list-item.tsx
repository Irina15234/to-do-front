import { Link } from 'react-router-dom';
import { CustomIconButton, IconButtonVariant } from '../../../custom-components/icon-button/icon-button';
import { Delete, Edit } from '@material-ui/icons';

interface CardListItemProps {
  name: string;
}

export const CardListItem = ({ name }: CardListItemProps) => {
  const isNeedToDisplayButtons = true;

  return (
    <Link to="/">
      <div className="card-list-item">
        <div className="card-list-item__name">{name}</div>
        {isNeedToDisplayButtons && (
          <div className="card-list-item__buttons">
            <CustomIconButton variant={IconButtonVariant.icon}>
              <Edit style={{ color: 'var(--grey-color)' }} />
            </CustomIconButton>
            <CustomIconButton variant={IconButtonVariant.icon}>
              <Delete style={{ color: 'var(--red-color)' }} />
            </CustomIconButton>
          </div>
        )}
      </div>
    </Link>
  );
};
