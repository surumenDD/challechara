// src/components/TwitterWidget/TwitterWidget.stories.ts (例)

import type { Meta, StoryObj } from '@storybook/react';
import TwitterWidget from './TwitterWidget';

const meta: Meta<typeof TwitterWidget> = {
  title: 'Sidebar/TwitterWidget', // Storybookのサイドバーでの表示名
  component: TwitterWidget,
  parameters: {
    layout: 'centered', // ストーリーを中央に配置
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TwitterWidget>;

// デフォルトの表示
export const Default: Story = {
  args: {}, // プロパティがないため空
};