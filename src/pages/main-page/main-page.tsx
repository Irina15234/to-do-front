import { Card } from '../../components/main-page/card/card';
import './main-page.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMainPageAction } from '../../slices/main-page/main-page-slice';
import { State } from '../../slices/types';
import { test1 } from '../../services/test';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    test1()
      .then((res) => console.log(res))
      .catch();

    // todo
    dispatch(
      setMainPageAction({
        boards: [
          {
            id: 0,
            authorId: 0,
            name: 'Тестовая доска'
          }
        ],
        tasks: [
          {
            id: 0,
            authorId: 1,
            executorId: 1,
            name: 'Задача1',
            priority: 'middle',
            statusId: 0,
            date: '12.12.2022'
          }
        ]
      })
    );
  }, []);

  const mainPageState = useSelector((state: State) => state.mainPage);

  return (
    <div className="main-page">
      <div className="main-page__dashboards-containers">
        <Card title="Boards" sourceList={mainPageState.boards} />
      </div>
      <div className="main-page__tasks-containers">
        <Card title="Tasks" sourceList={mainPageState.tasks} className="item-with-bottom-margin" />
        <Card title="Tasks in progress" sourceList={[]} />
      </div>
    </div>
  );
};
