import { Alert, AlertColor, Slide, SlideProps, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { resetSnackbarAction } from '../../slices/common/common-slice';
import { State } from '../../slices/types';

export const CustomSnackbar = () => {
  const dispatch = useDispatch();

  const snackbars = useSelector((state: State) => state.common.snackbar);

  const SlideTransition = (props: SlideProps) => {
    return <Slide {...props} direction="up" />;
  };

  const handleClose = () => {
    dispatch(resetSnackbarAction());
  };

  return (
    <Snackbar open={snackbars.open} onClose={handleClose} TransitionComponent={SlideTransition} autoHideDuration={4000}>
      <Alert onClose={handleClose} severity={snackbars.variant as AlertColor}>
        {snackbars.message}
      </Alert>
    </Snackbar>
  );
};
