import { useDispatch, useSelector } from 'react-redux';
import { getBoardOrTaskId, isEditPage, isNewPage } from '../../common/helpers';
import { Board, BoardColumn, State } from '../../slices/types';
import { useCallback, useEffect, useState } from 'react';
import { getBoardById, createBoard, updateBoardById, renameBoard } from '../../services/board-service';
import { setBoardAction } from '../../slices/board/board-slice';
import { ButtonType } from '../../custom-components/button/button';
import { useNavigate } from 'react-router-dom';
import { difference } from 'lodash';
import { setSnackbarAction } from '../../slices/common/common-slice';
import { useUpdateStatus } from '../../common/hooks/useUpdateStatus';

export const useBoardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stateBoard = useSelector((state: State) => state.board);

  useUpdateStatus();

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
  const [deletedColumnsIds, setDeletedColumnsIds] = useState<number[]>([]);

  const handleSaveName = useCallback(() => {
    if (isEditPage()) {
      stateBoard.id &&
        renameBoard(stateBoard.id, boardName)
          .then(() => {
            setOpenNameSettingDialog(false);
            setIsEditName(false);
          })
          .catch((error) => {
            dispatch(
              setSnackbarAction({
                message: error.response.data,
                variant: 'error',
                open: true
              })
            );
          });
    } else {
      setOpenNameSettingDialog(false);
      setIsEditName(false);
    }
  }, [boardName, dispatch, stateBoard.id]);

  const handleCloseNameSetting = useCallback(() => {
    setOpenNameSettingDialog(false);
    setIsEditName(false);
    !isEditName && navigate(`/`);
  }, [isEditName, navigate]);

  const changeColumns = useCallback(
    (newColumns: BoardColumn[]) => {
      if (columns.length > newColumns.length && stateBoard.id) {
        const deletedColumnId = difference(columns, newColumns)[0].id;
        setDeletedColumnsIds([...deletedColumnsIds, deletedColumnId]);
      }
      setColumns(newColumns);
    },
    [columns, deletedColumnsIds, stateBoard.id]
  );

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Save',
      onClick: handleSaveName,
      disabled: !boardName.length
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
      updateBoardById(board, deletedColumnsIds)
        .then(() => {
          navigate(`/board/${boardId}`);
        })
        .catch((error) => {
          dispatch(setSnackbarAction({ message: error.response.data, variant: 'error', open: true }));
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
        navigate(`/board/${res.id}`);
      });
    }
  }, [boardName, columns, deletedColumnsIds, dispatch, navigate]);

  const handleClickTitleEdit = useCallback(() => {
    setOpenNameSettingDialog(true);
    setIsEditName(true);
  }, []);

  const handleCloseEditMode = useCallback(() => {
    isNewPage() ? navigate('/') : navigate(`/board/${getBoardOrTaskId()}`);
  }, [navigate]);

  return {
    boardName,
    handleClickTitleEdit,
    columns,
    changeColumns,
    handleSaveBoard,
    openNameSettingDialog,
    handleCloseNameSetting,
    actions,
    setBoardName,
    handleCloseEditMode
  };
};
