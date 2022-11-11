import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../slices/types';
import { useCallback } from 'react';
import { setOpenPanelAction } from '../../slices/common/common-slice';
import { ThemeBlock } from './theme-block/theme-block';

export interface ItemBlockI {
  title: string;
  children: JSX.Element;
}

export const useSidePanel = () => {
  const dispatch = useDispatch();

  const isOpenPanel = useSelector((state: State) => state.common.isOpenSidePanel);

  const handleClosePanel = useCallback(() => {
    dispatch(setOpenPanelAction(false));
  }, [dispatch]);

  const itemsBlocks: ItemBlockI[] = [
    {
      title: 'Visualization settings',
      children: <ThemeBlock />
    }
  ];

  return {
    isOpenPanel,
    handleClosePanel,
    itemsBlocks
  };
};
