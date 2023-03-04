/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { Story, Meta, ArgTypes } from '@storybook/react';
import { RootEnterSingleTool } from '../RootEnterSingleTool';

interface StoryProps extends ComponentProps<typeof RootEnterSingleTool> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypesSetting: MyArgTypes = {};

export default {
  title: 'root/RootEnterSingleTool',
  component: RootEnterSingleTool,
  argTypes: argTypesSetting,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<StoryProps> = ({ ...props }) => (
  <RootEnterSingleTool {...props} />
);

export const Default = Template.bind({});
Default.args = {};
