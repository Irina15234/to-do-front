import { Card } from '../../components/main-page/card/card';
import './main-page.css';
import { Board, Task } from '../../slices/types';
import { useEffect, useState } from 'react';
import { getBoards, getTasks } from '../../services/service';

export const MainPage = () => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getBoards().then((boards) => {
      setBoards(boards);
    });
    getTasks().then((tasks) => {
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
