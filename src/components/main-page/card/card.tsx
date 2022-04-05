import './card.css';
import clsx from 'clsx';

interface CardProps {
  title: string;
  sourceList: any[];
  className?: string;
}

export const Card = ({ title, sourceList, className }: CardProps) => {
  return (
    <div className={clsx('card-container', className)}>
      <div className="card-container__header">{title}</div>
      <div className="card-container__main">
        {!sourceList.length && <div className="card-container__empty">Нет данных</div>}
      </div>
    </div>
  );
};
