import { useDispatch, useSelector } from 'react-redux';
import { getBoardOrTaskId, isNewPage } from '../../common/helpers';
import { Board, BoardColumn, State } from '../../slices/types';
import { useCallback, useEffect, useState } from 'react';
import { getBoardById, createBoard, updateBoardById } from '../../services/board-service';
import { setBoardAction } from '../../slices/board/board-slice';
import { ButtonType } from '../../custom-components/button/button';

export const useBoardPage = () => {
  const dispatch = useDispatch();

  const stateBoard = useSelector((state: State) => state.board);

  useEffect(() => {
    const loadBoard = () => {
      const boardId: number | null = getBoardOrTaskId();

      const isNeedToLoadBoard = boardId && boardId !== stateBoard.id;

      isNeedToLoadBoard &&
        getBoardById(boardId).then((res) => {
          dispatch(setBoardAction(res));
          setColumns(res.columns);
          setBoardName(res.name);
        });
    };

    loadBoard();
  }, [dispatch, stateBoard.id]);

  const [openNameSettingDialog, setOpenNameSettingDialog] = useState<boolean>(isNewPage());
  const [boardName, setBoardName] = useState<string>(stateBoard.name);
  const [columns, setColumns] = useState<BoardColumn[]>(stateBoard.columns || []);
  const [isEditName, setIsEditName] = useState<boolean>(false);

  const handleSaveName = useCallback(() => {
    setOpenNameSettingDialog(false);
    setIsEditName(false);
  }, []);

  const handleCloseNameSetting = useCallback(() => {
    setOpenNameSettingDialog(false);
    setIsEditName(false);
    !isEditName && (window.location.href = location.origin);
  }, [isEditName]);

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
    const boardId = getBoardOrTaskId();
    if (boardId) {
      const board: Board = {
        id: boardId,
        name: boardName,
        columns,
        tasks: []
      };
      updateBoardById(board).then(() => {
        location.href = location.origin + '/board/' + boardId;
      });
    } else {
      const board: Board = {
        id: null,
        name: boardName,
        columns,
        tasks: []
      };

      createBoard(board).then((res) => {
        dispatch(setBoardAction(res));
        location.href = location.origin + '/board/' + res.id;
      });
    }
  }, [boardName, columns, dispatch]);

  const handleClickTitleEdit = useCallback(() => {
    setOpenNameSettingDialog(true);
    setIsEditName(true);
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
