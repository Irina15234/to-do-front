import './sections.css';
import { Container } from './container';
import { BlockTypes } from './blocks/helper';

export const LeftSection = () => {
  return (
    <div className="left-section">
      <Container type={BlockTypes.people} />
      <Container type={BlockTypes.dates} />
    </div>
  );
};
