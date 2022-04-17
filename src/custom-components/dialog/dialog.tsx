import { Dialog, DialogProps, DialogTitle, DialogTitleProps, styled } from '@mui/material';
import { CustomIconButton, IconButtonVariant } from '../icon-button/icon-button';
import { Close } from '@mui/icons-material';

interface CustomDialogTitleProps extends DialogTitleProps {
  title?: string;
  description?: string;
  onClose: () => void;
}

interface CustomDialogProps extends DialogProps {
  title?: string;
  description?: string;
  onClose: () => void;
}

const StyledTitle = styled(DialogTitle)({
  display: 'flex',
  borderBottom: '1px solid var(--light-border-color, #d2c8bc)',
  padding: '12px 16px',
  minWidth: '300px',

  '.dialog__title': {
    marginRight: 'auto',
    color: 'var(--dark-text-color, #444444)'
  }
});

const CustomDialogTitle = (props: CustomDialogTitleProps) => {
  const { title, description, onClose } = props;

  return (
    <StyledTitle>
      <div className="dialog__title">
        {title && <span>{title}</span>}
        {description && <span>{description}</span>}
      </div>
      <CustomIconButton variant={IconButtonVariant.icon} onClick={onClose}>
        <Close style={{ color: 'var(--dark-icon-color, #ac7e62)' }} />
      </CustomIconButton>
    </StyledTitle>
  );
};

export const CustomDialog = ({ ...props }: CustomDialogProps) => {
  return (
    <Dialog open={props.open}>
      <CustomDialogTitle title={props.title} description={props.description} onClose={props.onClose} />
      {props.children}
    </Dialog>
  );
};
