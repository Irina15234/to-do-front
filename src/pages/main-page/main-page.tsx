import { Card } from '../../components/main-page/card/card';
import './main-page.css';
import { useSelector } from 'react-redux';
import { State } from '../../slices/types';

export const MainPage = () => {
  const mainPageState = useSelector((state: State) => state.mainPage);

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
