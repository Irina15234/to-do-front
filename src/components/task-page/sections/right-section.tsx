import './sections.css';
import { Container } from './container';
import { BlockTypes } from './blocks/helper';

export const RightSection = () => {
  return (
    <div className="right-section">
      <Container type={BlockTypes.details} />
      <Container type={BlockTypes.subtasks} />
    </div>
  );
};
