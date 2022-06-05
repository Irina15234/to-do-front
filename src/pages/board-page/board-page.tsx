import { getBoardOrTaskId, isEditPage, isNewPage } from '../../common/helpers';
import './board-page.css';
import { ColumnsGroup } from '../../components/board-page/columns-group/columns-group';
import { useCallback, useEffect, useState } from 'react';
import { CustomInput } from '../../custom-components/input/input';
import { CustomDialog } from '../../custom-components/dialog/dialog';
import { ButtonType } from '../../custom-components/button/button';
import { Panel } from '../../components/board-page/panel/panel';
import { getBoardById, newBoard } from '../../services/board-service';
import { Board, BoardColumn, State } from '../../slices/types';
import { useDispatch, useSelector } from 'react-redux';
import { setBoardAction } from '../../slices/board/board-slice';

export const BoardPage = () => {
  const boardId: number | null = getBoardOrTaskId();

  const stateBoard = useSelector((state: State) => state.board);

  const loadBoard = () => {
    const isNeedToLoadBoard = boardId && boardId !== stateBoard.id;

    isNeedToLoadBoard &&
      getBoardById(boardId).then((res) => {
        dispatch(setBoardAction(res));
        setColumns(res.columns);
      });
  };

  useEffect(() => {
    loadBoard();
  }, []);

  const dispatch = useDispatch();
  const [openNameSettingDialog, setOpenNameSettingDialog] = useState<boolean>(isNewPage());
  const [boardName, setBoardName] = useState<string>(stateBoard.name);
  const [columns, setColumns] = useState<BoardColumn[]>(stateBoard.columns);

  const handleSaveName = useCallback(() => {
    setOpenNameSettingDialog(false);
  }, [setOpenNameSettingDialog]);

  const handleCloseNameSetting = useCallback(() => {
    setOpenNameSettingDialog(false);
    window.location.href = location.origin;
  }, [setOpenNameSettingDialog]);

  const changeColumns = useCallback(
    (newColumns: BoardColumn[]) => {
      setColumns(newColumns);
    },
    [setColumns]
  );

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
      name: boardName,
      columns
    };
    dispatch(setBoardAction(board));
    newBoard(board).then((res) => {
      dispatch(setBoardAction(res));
      location.href = location.origin + '/board/' + res.id;
    });
  }, [boardName, columns]);

  return (
    <div className="board-page">
      <div className="board-page__header-container">
        <div className="board-page__title">{boardName || 'Board'}</div>
      </div>
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
