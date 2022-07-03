import { useTaskPage } from './useTaskPage';
import './task-page.css';
import { RightSection } from '../../components/task-page/sections/right-section';
import { LeftSection } from '../../components/task-page/sections/left-section';

export const TaskPage = () => {
  const { task } = useTaskPage();

  return (
    <div className="task-page">
      <div className="task-page__head">
        <div className="task-page__head-title">{task?.name}</div>
      </div>
      <div className="task-page__main">
        <RightSection />
        <LeftSection />
      </div>
    </div>
  );
};
