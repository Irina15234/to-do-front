import { Card } from '../../components/main-page/card/card';
import './main-page.css';

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__dashboards-containers">
        <Card title="Boards" isBoards={true} />
      </div>
      <div className="main-page__tasks-containers">
        <Card title="Tasks" className="item-with-bottom-margin" />
      </div>
    </div>
  );
};
