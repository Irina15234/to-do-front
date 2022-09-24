import { useTaskPage } from './useTaskPage';
import './task-page.css';
import { RightSection } from '../../components/task-page/sections/right-section';
import { LeftSection } from '../../components/task-page/sections/left-section';
import { CustomBreadcrumbs } from '../../custom-components/breadcrumbs/breadcrumbs';

export const TaskPage = () => {
  const { breadcrumbs } = useTaskPage();

  return (
    <div className="task-page">
      <div className="task-page__head">
        <CustomBreadcrumbs>{breadcrumbs}</CustomBreadcrumbs>
      </div>
      <div className="task-page__main">
        <RightSection />
        <LeftSection />
      </div>
    </div>
  );
};
