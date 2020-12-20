import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import PaypalIcon from './PaypalIcon';

export default {
  title: 'SummaryIcons/PaypalIcon',
  component: PaypalIcon,
} as Meta;

const Template: Story = (args) => <PaypalIcon {...args} />;

export const Paypal = Template.bind({});
Paypal.args = {};
