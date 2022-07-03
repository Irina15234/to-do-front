import { isEditPage, isNewPage } from '../../common/helpers';
import './board-page.css';
import { ColumnsGroup } from '../../components/board-page/columns-group/columns-group';
import React from 'react';
import { CustomInput } from '../../custom-components/input/input';
import { CustomDialog } from '../../custom-components/dialog/dialog';
import { Panel } from '../../components/board-page/panel/panel';
import { BoardHeader } from '../../components/board-page/board-header/board-header';
import { useBoardPage } from './useBoardPage';

export const BoardPage = () => {
  const {
    boardName,
    handleClickTitleEdit,
    columns,
    changeColumns,
    handleSaveBoard,
    openNameSettingDialog,
    handleCloseNameSetting,
    actions,
    setBoardName
  } = useBoardPage();

  return (
    <div className="board-page">
      <BoardHeader boardName={boardName} handleClickTitleEdit={handleClickTitleEdit} />
      <div className="board-page__main">
        <ColumnsGroup columns={columns} changeColumns={changeColumns} />
      </div>

      {(isNewPage() || isEditPage()) && <Panel onClick={handleSaveBoard} />}

      <CustomDialog open={openNameSettingDialog} title="New board" onClose={handleCloseNameSetting} actions={actions}>
        <div>
          <CustomInput
            value={boardName}
            label="Board name"
            onChange={(event) => setBoardName(event.target.value)}
            colorVariant="dark"
            fullWidth={true}
          />
        </div>
      </CustomDialog>
    </div>
  );
};
