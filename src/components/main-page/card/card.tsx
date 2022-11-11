import './card.css';
import clsx from 'clsx';
import { MainViewBoard, MainViewTask } from '../../../slices/types';
import { CardListItem, CardType } from './card-list-item';
import { ButtonType, CustomButton } from '../../../custom-components/button/button';
import { useCallback, useEffect, useState } from 'react';
import { getBoardsList } from '../../../services/board-service';
import { getTasksList } from '../../../services/task-service';

interface CardProps {
  title: string;
  className?: string;
  isBoards?: boolean;
}

export const Card = ({ title, className, isBoards = false }: CardProps) => {
  const [sourceList, setSourceList] = useState<MainViewBoard[] | MainViewTask[]>([]);

  useEffect(() => {
    const getSourceList = isBoards ? getBoardsList : getTasksList;
    getSourceList().then((tasks) => {
      setSourceList(tasks);
    });
  }, [isBoards]);

  const updateSourceListAfterDeleting = useCallback(
    (sourceId: number) => {
      const filteredSourceList = [...sourceList].filter((source) => source.id !== sourceId);
      setSourceList(filteredSourceList);
    },
    [sourceList]
  );

  return (
    <div className={clsx('card-container', className)}>
      <div className="card-container__header">{title}</div>
      <div className="card-container__main">
        {!sourceList.length && <div className="card-container__empty">Нет данных</div>}

        {sourceList.map((source) => (
          <CardListItem
            key={`title-${source.name}`}
            source={source}
            type={isBoards ? CardType.board : CardType.task}
            updateSourceListAfterDeleting={updateSourceListAfterDeleting}
          />
        ))}

        {isBoards && (
          <div className="card-container__add-container">
            <CustomButton buttonType={ButtonType.add} startIconColor="var(--button-color-2)" href="/board/new">
              Add new board
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
};
