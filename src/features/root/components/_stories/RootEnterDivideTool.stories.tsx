/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { Story, Meta, ArgTypes } from '@storybook/react';
import { RootEnterDivideTool } from '../RootEnterDivideTool';

interface StoryProps extends ComponentProps<typeof RootEnterDivideTool> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypesSetting: MyArgTypes = {};

export default {
  title: 'root/RootEnterDivideTool',
  component: RootEnterDivideTool,
  argTypes: argTypesSetting,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<StoryProps> = ({ ...props }) => (
  <RootEnterDivideTool {...props} />
);

export const Default = Template.bind({});
Default.args = {};
