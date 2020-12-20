import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import IncomeIcon from './IncomeIcon';

export default {
  title: 'Summary/IncomeIcon',
  component: IncomeIcon,
} as Meta;

const Template: Story = (args) => <IncomeIcon {...args} />;

export const Income = Template.bind({});
Income.args = {};
