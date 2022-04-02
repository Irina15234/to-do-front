import { Card } from '../../components/main-page/card/card';
import './main-page.css';

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__dashboards-containers">
        <Card title="Boards" sourceList={[]} className="item-with-bottom-margin" />
        <Card title="Your Boards" sourceList={[]} />
      </div>
      <div className="main-page__tasks-containers">
        <Card title="Tasks" sourceList={[]} className="item-with-bottom-margin" />
        <Card title="Tasks in progress" sourceList={[]} />
      </div>
    </div>
  );
}