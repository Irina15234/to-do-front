import './panel.css';
import { ButtonType, CustomButton } from '../../../custom-components/button/button';

export const Panel = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="board-panel">
      <div className="board-panel__right">
        <CustomButton buttonType={ButtonType.standard} onClick={onClick}>
          Save
        </CustomButton>
      </div>
    </div>
  );
};
