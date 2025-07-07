// src/components/MiniBanners/MiniBanners.stories.ts (例)

import type { Meta, StoryObj } from '@storybook/react';
import MiniBanners from './MiniBanners'; // コンポーネントへの正しいパスを調整してください

const meta: Meta<typeof MiniBanners> = {
  title: 'Sidebar/MiniBanners', // Storybookのサイドバーでの表示名
  component: MiniBanners,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MiniBanners>;

// デフォルトの表示
export const Default: Story = {
  args: {}, // プロパティがないため空
};