import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SummaryLabel from './SummaryLabel';
import { SummaryLabelProps } from '../../../models/SummaryLabelProps';

export default {
  title: 'Summary/SummaryLabel',
  component: SummaryLabel,
} as Meta;

const Template: Story<SummaryLabelProps> = (args) => <SummaryLabel {...args} />;

export const Label = Template.bind({});
Label.args = {
  isCancelled: true,
};
