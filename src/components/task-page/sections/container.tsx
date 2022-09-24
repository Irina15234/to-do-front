import { useState } from 'react';
import { ArrowDropDownRounded, ArrowDropUpRounded } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import { BlockTypes, getBlockByType } from './blocks/helper';

export const Container = ({ type }: { type: BlockTypes }) => {
  const [openInfo, setOpenInfo] = useState<boolean>(true);

  const toggleHiddenInfo = () => {
    setOpenInfo((prevState) => !prevState);
  };

  return (
    <div className="section-block-container">
      <div className="section-block-container__head" role="button" tabIndex={0} onClick={toggleHiddenInfo}>
        <div className="section-block-container__title">{type}</div>
        {openInfo ? (
          <ArrowDropDownRounded style={{ color: 'var(--button-color)' }} />
        ) : (
          <ArrowDropUpRounded style={{ color: 'var(--secondary-button-color)' }} />
        )}
      </div>

      <Collapse in={openInfo}>{getBlockByType(type)}</Collapse>
    </div>
  );
};
