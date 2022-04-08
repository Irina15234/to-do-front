import { CustomTooltip } from './tooltip';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TooltipProps } from '@mui/material';

export default {
  component: CustomTooltip,
  name: 'CustomTooltip'
} as ComponentMeta<typeof CustomTooltip>;

const Template: ComponentStory<typeof CustomTooltip> = (args: TooltipProps) => (
  <CustomTooltip {...args}>{args.children}</CustomTooltip>
);

export const Tooltip = Template.bind({});

Tooltip.args = {
  arrow: true,
  title: 'test',
  children: <div style={{ width: '50px' }}>test</div>
};
