import { isEditPage, isNewPage } from '../../common/helpers';
import './board-page.css';
import { ColumnsGroup } from '../../components/board-page/columns-group/columns-group';
import { useCallback, useState } from 'react';
import { CustomInput } from '../../custom-components/input/input';
import { CustomDialog } from '../../custom-components/dialog/dialog';
import { ButtonType } from '../../custom-components/button/button';
import { Panel } from '../../components/board-page/panel/panel';
import { newBoard } from '../../services/board-service';
import { Board } from '../../slices/types';
import { useDispatch } from 'react-redux';
import { setBoardAction } from '../../slices/board/board-slice';

export const BoardPage = () => {
  const dispatch = useDispatch();
  const [openNameSettingDialog, setOpenNameSettingDialog] = useState<boolean>(isNewPage());
  const [boardName, setBoardName] = useState<string>('');

  const handleSaveName = useCallback(() => {
    setOpenNameSettingDialog(false);
  }, [setOpenNameSettingDialog]);

  const handleCloseNameSetting = useCallback(() => {
    setOpenNameSettingDialog(false);
    window.location.href = location.origin;
  }, [setOpenNameSettingDialog]);

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Save',
      onClick: handleSaveName
    },
    {
      buttonType: ButtonType.neutral,
      title: 'Cancel',
      onClick: handleCloseNameSetting
    }
  ];

  const handleSaveBoard = useCallback(() => {
    const board: Board = {
      id: null,
      authorId: 0,
      name: boardName,
      userIds: [0],
      columns: []
    };
    newBoard(board).then((res: Board) => {
      dispatch(setBoardAction(res));
      location.href = location.origin + '/board/' + res.id;
    });
  }, [boardName]);

  return (
    <div className="board-page">
      <div className="board-page__header-container">
        <div className="board-page__title">{boardName || 'Board'}</div>
      </div>
      <div className="board-page__main">
        <ColumnsGroup />
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
