import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  DialogTitleProps,
  styled
} from '@mui/material';
import { CustomIconButton, IconButtonVariant, IconVariant } from '../icon-button/icon-button';
import { Close } from '@mui/icons-material';
import { ButtonType, CustomButton } from '../button/button';
import { CustomTooltip } from '../tooltip/tooltip';

interface CustomDialogTitleProps extends DialogTitleProps {
  title?: string;
  description?: string;
  onClose: () => void;
}

interface DialogAction {
  buttonType: ButtonType;
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

interface DialogAdditionalAction {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  icon: JSX.Element;
}

export interface CustomDialogProps extends DialogProps {
  title?: string;
  description?: string;
  onClose: () => void;
  actions: DialogAction[];
  additionalActions?: DialogAdditionalAction[];
}

const StyledDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    boxShadow: '0px 12px 26px -3px rgba(91, 130, 142, 0.4)',
    minWidth: '300px'
  }
});

const StyledTitle = styled(DialogTitle)({
  display: 'flex',
  borderBottom: '1px solid var(--light-border-color, #d2c8bc)',
  padding: '12px 16px',

  '.dialog__title': {
    marginRight: 'auto',
    color: 'var(--dark-text-color, #444444)'
  }
});

const StyledContent = styled(DialogContent)({
  padding: '12px 16px !important'
});

const StyledActions = styled(DialogActions)({
  padding: '12px 16px',
  borderTop: '1px solid var(--light-border-color, #d2c8bc)'
});

const StyledAdditionalActions = styled('div')({
  marginRight: 'auto'
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

export const CustomDialog = ({
  onClose,
  title,
  description,
  actions,
  additionalActions,
  children,
  ...props
}: CustomDialogProps) => {
  return (
    <StyledDialog {...props}>
      <CustomDialogTitle title={title} description={description} onClose={onClose} />
      <StyledContent>{children}</StyledContent>
      <StyledActions>
        {additionalActions && (
          <StyledAdditionalActions>
            {additionalActions.map((button) => (
              <CustomTooltip key={button.title} title={button.title}>
                <div>
                  <CustomIconButton
                    iconvariant={IconVariant.secondary}
                    onClick={button.onClick}
                    disabled={button.disabled}
                  >
                    {button.icon}
                  </CustomIconButton>
                </div>
              </CustomTooltip>
            ))}
          </StyledAdditionalActions>
        )}
        {actions.map((button) => (
          <CustomButton
            key={button.title}
            buttonType={button.buttonType}
            onClick={button.onClick}
            disabled={button.disabled}
          >
            {button.title}
          </CustomButton>
        ))}
      </StyledActions>
    </StyledDialog>
  );
};
