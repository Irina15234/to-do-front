import './card.css';
import clsx from 'clsx';
import { Board, Task } from '../../../slices/types';
import { CardListItem } from './card-list-item';

interface CardProps {
  title: string;
  sourceList: Board[] | Task[];
  className?: string;
}

export const Card = ({ title, sourceList, className }: CardProps) => {
  return (
    <div className={clsx('card-container', className)}>
      <div className="card-container__header">{title}</div>
      <div className="card-container__main">
        {!sourceList.length && <div className="card-container__empty">Нет данных</div>}

        {sourceList.map((source) => (
          <CardListItem name={source.name} />
        ))}
      </div>
    </div>
  );
};
