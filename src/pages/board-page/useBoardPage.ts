import { useDispatch, useSelector } from 'react-redux';
import { getBoardOrTaskId, isNewPage } from '../../common/helpers';
import { Board, BoardColumn, State } from '../../slices/types';
import { useCallback, useEffect, useState } from 'react';
import { getBoardById, newBoard } from '../../services/board-service';
import { setBoardAction } from '../../slices/board/board-slice';
import { ButtonType } from '../../custom-components/button/button';

export const useBoardPage = () => {
  const dispatch = useDispatch();
  const boardId: number | null = getBoardOrTaskId();

  const stateBoard = useSelector((state: State) => state.board);

  useEffect(() => {
    const loadBoard = () => {
      const isNeedToLoadBoard = boardId && boardId !== stateBoard.id;

      isNeedToLoadBoard &&
        getBoardById(boardId).then((res) => {
          dispatch(setBoardAction(res));
          setColumns(res.columns);
          setBoardName(res.name);
        });
    };

    loadBoard();
  });

  const [openNameSettingDialog, setOpenNameSettingDialog] = useState<boolean>(isNewPage());
  const [boardName, setBoardName] = useState<string>(stateBoard.name);
  const [columns, setColumns] = useState<BoardColumn[]>(stateBoard.columns);

  const handleSaveName = useCallback(() => {
    setOpenNameSettingDialog(false);
  }, []);

  const handleCloseNameSetting = useCallback(() => {
    setOpenNameSettingDialog(false);
    window.location.href = location.origin;
  }, []);

  const changeColumns = useCallback((newColumns: BoardColumn[]) => {
    setColumns(newColumns);
  }, []);

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
      columns,
      tasks: []
    };
    dispatch(setBoardAction(board));
    newBoard(board).then((res) => {
      dispatch(setBoardAction(res));
      location.href = location.origin + '/board/' + res.id;
    });
  }, [boardName, columns, dispatch]);

  const handleClickTitleEdit = useCallback(() => {
    setOpenNameSettingDialog(true);
  }, []);

  return {
    boardName,
    handleClickTitleEdit,
    columns,
    changeColumns,
    handleSaveBoard,
    openNameSettingDialog,
    handleCloseNameSetting,
    actions,
    setBoardName
  };
};
