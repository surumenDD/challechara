// SingleLink.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Linkコンポーネントのために必要

import SingleLink from './SingleLink';

const meta: Meta<typeof SingleLink> = {
  title: 'Components/SingleLink',
  component: SingleLink,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
  argTypes: {
    hoverColor: {
      control: { type: 'select' },
      options: ['cyber-blue', 'cyber-pink', 'cyber-green', 'cyber-orange', 'gray-500'], // 例として色を追加
      description: 'ホバー時のテキスト色 (Tailwind CSSのカラー名)',
    },
    to: {
      control: 'text',
      description: 'リンク先のパス',
    },
    title: {
      control: 'text',
      description: 'リンクの表示タイトル',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleLink>;

export const Default: Story = {
  args: {
    hoverColor: 'cyber-blue',
    to: '/about',
    title: 'サイトについて',
  },
};

export const PinkHover: Story = {
  args: {
    hoverColor: 'cyber-pink',
    to: '/contact',
    title: 'お問い合わせフォーム',
  },
};

export const GreenHover: Story = {
  args: {
    hoverColor: 'cyber-green',
    to: '/novels',
    title: '小説を読もう！',
  },
};