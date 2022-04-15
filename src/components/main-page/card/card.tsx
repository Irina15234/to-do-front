import './card.css';
import clsx from 'clsx';
import { Board, Task } from '../../../slices/types';
import { CardListItem } from './card-list-item';
import { CustomButton } from '../../../custom-components/button/button';

interface CardProps {
  title: string;
  sourceList: Board[] | Task[];
  className?: string;
  isBoards?: boolean;
}

export const Card = ({ title, sourceList, className, isBoards = false }: CardProps) => {
  return (
    <div className={clsx('card-container', className)}>
      <div className="card-container__header">{title}</div>
      <div className="card-container__main">
        {!sourceList.length && <div className="card-container__empty">Нет данных</div>}

        {sourceList.map((source) => (
          <CardListItem key={`title-${source.name}`} name={source.name} isBoards={isBoards} />
        ))}

        {isBoards && (
          <div className="card-container__add-container">
            <CustomButton buttonType="add" startIconColor="var(--dark-background-color)">
              Add new board
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
};
