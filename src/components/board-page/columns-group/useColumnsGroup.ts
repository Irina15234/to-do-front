import { useCallback, useState } from 'react';
import { ButtonType } from '../../../custom-components/button/button';
import { ColumnsGroupProps } from './columns-group';

export const useColumnsGroup = ({ columns, changeColumns }: ColumnsGroupProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [columnTitle, setColumnTitle] = useState<string>('');

  const handleAddColumnClick = () => {
    setOpenDialog(true);
  };

  const handleSave = useCallback(() => {
    changeColumns([...columns, { id: columns.length, name: columnTitle }]);
    setOpenDialog(false);
    setColumnTitle('');
  }, [columns, changeColumns, columnTitle]);

  const handleClose = useCallback(() => {
    setOpenDialog(false);
  }, [setOpenDialog]);

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Save',
      onClick: handleSave
    },
    {
      buttonType: ButtonType.neutral,
      title: 'Cancel',
      onClick: handleClose
    }
  ];

  return {
    handleAddColumnClick,
    openDialog,
    handleClose,
    actions,
    columnTitle,
    setColumnTitle
  };
};
