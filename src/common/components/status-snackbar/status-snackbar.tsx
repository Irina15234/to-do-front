import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../slices/types';
import { WsStatus } from '../../enums';

export const StatusSnackbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const status = useSelector((state: State) => state.common.status);

  useEffect(() => {
    status === WsStatus.outdated && setIsOpen(true);
  }, [status]);

  return (
    <Snackbar open={isOpen} onClose={() => setIsOpen(false)}>
      <Alert onClose={() => setIsOpen(false)} severity="info">
        The data has changed. Refresh the page.
      </Alert>
    </Snackbar>
  );
};
