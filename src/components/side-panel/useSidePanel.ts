import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../slices/types';
import { useCallback } from 'react';
import { setOpenPanelAction } from '../../slices/common/common-slice';

export const useSidePanel = () => {
  const dispatch = useDispatch();

  const isOpenPanel = useSelector((state: State) => state.common.isOpenSidePanel);

  const handleClosePanel = useCallback(() => {
    dispatch(setOpenPanelAction(false));
  }, [dispatch]);

  return {
    isOpenPanel,
    handleClosePanel
  };
};
