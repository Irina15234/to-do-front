import { useDetails } from './useDetails';
import { CustomSelect, CustomSelectOption } from '../../../../../custom-components/select/select';
import clsx from 'clsx';
import { CustomInput } from '../../../../../custom-components/input/input';

export const Details = () => {
  const { detailsList } = useDetails();

  return (
    <div className="section-block">
      {detailsList.map((item, index) => {
        switch (item.type) {
          case 'select':
            return (
              <CustomSelect
                key={item.name}
                label={item.label}
                name={item.name}
                options={item.options as CustomSelectOption[]}
                onChange={item.onChange}
                value={item.value}
                colorVariant="dark"
                error={!!item.error}
                fullWidth
                className={clsx({
                  'item-with-bottom-margin': detailsList.length - 1 !== index
                })}
              />
            );
          case 'textarea':
            return (
              <CustomInput
                key={item.name}
                onChange={item.onChange}
                label={item.label}
                name={item.name}
                value={item.value as string}
                error={!!item.error}
                helperText={item.error}
                colorVariant="dark"
                fullWidth
                className={clsx({
                  'error-input-margin': !!item.error,
                  'item-with-bottom-margin': detailsList.length - 1 !== index
                })}
                multiline
                minRows={6}
              />
            );
        }
      })}
    </div>
  );
};
