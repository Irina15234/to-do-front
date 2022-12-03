import { useDetails } from './useDetails';
import { CustomSelect } from '../../../../../custom-components/select/select';
import clsx from 'clsx';

export const Details = () => {
  const { detailsList } = useDetails();

  return (
    <div className="section-block">
      {detailsList.map((item, index) => {
        switch (item.type) {
          case 'select':
            return (
              <CustomSelect
                label={item.label}
                name={item.name}
                options={item.options}
                onChange={item.onChange}
                value={item.value}
                colorVariant="dark"
                fullWidth
                className={clsx({
                  'error-input-margin': !!item.error,
                  'item-with-bottom-margin': detailsList.length - 1 !== index
                })}
              />
            );
        }
      })}
    </div>
  );
};
