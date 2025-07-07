// LinkGroup.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import LinkGroup from './LinkGroup';

const meta: Meta<typeof LinkGroup> = {
  title: 'Components/LinkGroup',
  component: LinkGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
  argTypes: {
    groupName: {
      control: 'text',
      description: 'グループのタイトル',
    },
    groupColor: {
      control: { type: 'select' },
      options: ['cyber-blue', 'cyber-pink', 'cyber-green', 'cyber-orange', 'gray-500'],
      description: 'グループタイトルのテキスト色 (Tailwind CSSのカラー名)',
    },
    links: {
      control: 'object', // オブジェクトとして編集可能にする
      description: 'リンク情報の配列',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinkGroup>;

export const SiteInfoGroup: Story = {
  args: {
    groupName: 'サイト案内',
    groupColor: 'cyber-blue',
    links: [
      { hoverColor: 'cyber-blue', to: '/about', title: 'サイトについて' },
      { hoverColor: 'cyber-blue', to: '/help', title: 'ヘルプ' },
      { hoverColor: 'cyber-blue', to: '/rules', title: '利用規約' },
      { hoverColor: 'cyber-blue', to: '/privacy', title: 'プライバシーポリシー' },
    ],
  },
};

export const ContactGroup: Story = {
  args: {
    groupName: 'お問い合わせ',
    groupColor: 'cyber-pink',
    links: [
      { hoverColor: 'cyber-pink', to: '/contact', title: 'お問い合わせフォーム' },
      { hoverColor: 'cyber-pink', to: '/feedback', title: 'ご意見・ご要望' },
      { hoverColor: 'cyber-pink', to: '/bug-report', title: '不具合報告' },
    ],
  },
};

export const GroupSiteGroup: Story = {
  args: {
    groupName: 'グループサイト',
    groupColor: 'cyber-green',
    links: [
      { hoverColor: 'cyber-green', to: '/novels', title: '小説を読もう！' },
      { hoverColor: 'cyber-green', to: '/comics', title: 'コミック投稿サイト' },
      { hoverColor: 'cyber-green', to: '/games', title: 'ゲーム投稿サイト' },
    ],
  },
};

export const FollowGroup: Story = {
  args: {
    groupName: 'フォロー',
    groupColor: 'cyber-orange',
    links: [
      { hoverColor: 'cyber-orange', to: '/twitter', title: '公式Twitter' },
      { hoverColor: 'cyber-orange', to: '/blog', title: '公式ブログ' },
      { hoverColor: 'cyber-orange', to: '/newsletter', title: 'メルマガ登録' },
    ],
  },
};