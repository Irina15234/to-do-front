import { useState } from 'react';
import { ArrowDropDownRounded, ArrowDropUpRounded } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import { ItemBlockI } from './useSidePanel';

interface ItemBlockProps {
  block: ItemBlockI;
}

export const ItemBlock = ({ block }: ItemBlockProps) => {
  const [openInfo, setOpenInfo] = useState<boolean>(true);

  const toggleHiddenInfo = () => {
    setOpenInfo((prevState) => !prevState);
  };

  return (
    <div className="side-panel__block">
      <div className="side-panel__block__head" role="button" tabIndex={0} onClick={toggleHiddenInfo}>
        <div className="side-panel__block__title">{block.title}</div>
        {openInfo ? (
          <ArrowDropDownRounded style={{ color: 'var(--button-color)' }} />
        ) : (
          <ArrowDropUpRounded style={{ color: 'var(--secondary-button-color)' }} />
        )}
      </div>

      <Collapse in={openInfo}>{block.children}</Collapse>
    </div>
  );
};
