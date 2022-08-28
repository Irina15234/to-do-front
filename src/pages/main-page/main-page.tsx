import { Card } from '../../components/main-page/card/card';
import './main-page.css';
import { MainViewBoard, MainViewTask } from '../../slices/types';
import { useEffect, useState } from 'react';
import { getTasksList } from '../../services/task-service';
import { getBoardsList } from '../../services/board-service';

export const MainPage = () => {
  const [boards, setBoards] = useState<MainViewBoard[]>([]);
  const [tasks, setTasks] = useState<MainViewTask[]>([]);

  useEffect(() => {
    getBoardsList().then((boards) => {
      setBoards(boards);
    });
    getTasksList().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  return (
    <div className="main-page">
      <div className="main-page__dashboards-containers">
        <Card title="Boards" sourceList={boards} isBoards={true} />
      </div>
      <div className="main-page__tasks-containers">
        <Card title="Tasks" sourceList={tasks} className="item-with-bottom-margin" />
      </div>
    </div>
  );
};
