import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CancelledIcon from './CancelledIcon';

export default {
  title: 'SummaryIcons/CancelledIcon',
  component: CancelledIcon,
} as Meta;

const Template: Story = (args) => <CancelledIcon {...args} />;

export const Cancelled = Template.bind({});
Cancelled.args = {};
