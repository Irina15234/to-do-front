import { isEditPage, isNewPage } from '../../common/helpers';
import './board-page.css';
import { ColumnsGroup } from '../../components/board-page/columns-group/columns-group';
import React from 'react';
import { CustomInput } from '../../custom-components/input/input';
import { CustomDialog } from '../../custom-components/dialog/dialog';
import { Panel } from '../../components/board-page/panel/panel';
import { BoardHeader } from '../../components/board-page/board-header/board-header';
import { useBoardPage } from './useBoardPage';
import { ButtonType, CustomButton } from '../../custom-components/button/button';
import clsx from 'clsx';
import { BoardUsersDialog } from '../../components/board-page/board-users-dialog/board-users-dialog';

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
    setBoardName,
    handleCloseEditMode,
    isOpenUsersBoardDialog,
    permissions
  } = useBoardPage();

  return (
    <div className="board-page">
      <BoardHeader boardName={boardName} handleClickTitleEdit={handleClickTitleEdit} permissions={permissions} />
      <div className={clsx('board-page__main', { 'board-page__main_edit': isNewPage() || isEditPage() })}>
        <ColumnsGroup columns={columns} changeColumns={changeColumns} />
      </div>

      {(isNewPage() || isEditPage()) && (
        <Panel>
          <>
            {!isEditPage() && (
              <CustomButton
                buttonType={ButtonType.standard}
                onClick={handleSaveBoard}
                className="item-with-right-margin"
              >
                Save
              </CustomButton>
            )}
            <CustomButton buttonType={ButtonType.neutral} onClick={handleCloseEditMode}>
              Cancel
            </CustomButton>
          </>
        </Panel>
      )}

      {isOpenUsersBoardDialog && <BoardUsersDialog />}

      <CustomDialog open={openNameSettingDialog} title="New board" onClose={handleCloseNameSetting} actions={actions}>
        <div>
          <CustomInput
            value={boardName}
            label="Board name"
            onChange={(event) => setBoardName(event.target.value)}
            colorVariant="dark"
            error={!boardName.length}
            fullWidth={true}
            required
          />
        </div>
      </CustomDialog>
    </div>
  );
};
