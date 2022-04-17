import { BoardColumn } from '../../../slices/types';
import './column.css';

interface ColumnProps {
  column: BoardColumn;
}

export const Column = ({ column }: ColumnProps) => {
  return (
    <div className="column">
      <div className="column__title-container">
        <div className="column__title">{column.name}</div>
      </div>
      <div className="column__main">

      </div>
    </div>
  );
};
