import { Card } from '../../components/main-page/card/card';
import './main-page.css';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../slices/types';
import { useEffect } from 'react';
import { getBoards, getTasks } from '../../services/service';
import { setBoardsAction, setTasksAction } from '../../slices/main-page/main-page-slice';

export const MainPage = () => {
  const dispatch = useDispatch();
  const mainPageState = useSelector((state: State) => state.mainPage);

  useEffect(() => {
    !mainPageState.boards.length &&
      getBoards().then((boards) => {
        dispatch(setBoardsAction(boards));
      });
    !mainPageState.boards.length &&
      getTasks().then((tasks) => {
        dispatch(setTasksAction(tasks));
      });
  }, []);

  return (
    <div className="main-page">
      <div className="main-page__dashboards-containers">
        <Card title="Boards" sourceList={mainPageState.boards} isBoards={true} />
      </div>
      <div className="main-page__tasks-containers">
        <Card title="Tasks" sourceList={mainPageState.tasks} className="item-with-bottom-margin" />
        <Card title="Tasks in progress" sourceList={[]} />
      </div>
    </div>
  );
};
