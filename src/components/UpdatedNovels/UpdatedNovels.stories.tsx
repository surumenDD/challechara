import type { Meta, StoryObj } from '@storybook/react';
import UpdatedNovels from './UpdatedNovels';
import { BrowserRouter as Router } from 'react-router-dom';

const meta = {
  title: 'コンポーネント/UpdatedNovels',
  component: UpdatedNovels,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Router>
        <div className="bg-cyber-dark p-4">
          <Story />
        </div>
      </Router>
    ),
  ],
  args: {
    novels: [
      { id: 1, title: 'サイバーパンク・ラプソディ', author: 'NeonWriter', updatedAt: '2分前', episode: '第45話' },
      { id: 2, title: '電脳世界の恋愛シミュレーション', author: 'DigitalLover', updatedAt: '15分前', episode: '第32話' },
      { id: 3, title: '未来都市の影を歩く者', author: 'ShadowRunner', updatedAt: '1時間前', episode: '第21話' },
      { id: 4, title: 'AIと人間の境界線', author: 'CyberPhilosopher', updatedAt: '3時間前', episode: '第67話' },
    ],
  },
} satisfies Meta<typeof UpdatedNovels>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FewNovels: Story = {
  args: {
    novels: [
      { id: 1, title: 'サイバーパンク・ラプソディ II', author: 'NeonWriter', updatedAt: '1時間前', episode: '第10話' },
    ],
  },
};

export const Empty: Story = {
  args: {
    novels: [],
  },
};