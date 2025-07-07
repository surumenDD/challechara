import type { Meta, StoryObj } from '@storybook/react';
import FeaturedNovels from './FeaturedNovels';
import { BrowserRouter as Router } from 'react-router-dom';

const meta = {
  title: 'コンポーネント/FeaturedNovels',
  component: FeaturedNovels,
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
      { id: 1, title: 'サイバーパンク・ラプソディ', author: 'NeonWriter', description: '2087年、ネオンが煌めく未来都市。一人のハッカーが巨大企業に立ち向かう...', tags: ['SF', 'サイバーパンク', 'アクション'] },
      { id: 2, title: '電脳世界の恋愛シミュレーション', author: 'DigitalLover', description: 'VR空間で出会った二人の恋愛物語。現実と仮想の境界が曖昧になる中で...', tags: ['恋愛', 'SF', 'VR'] },
    ],
  },
} satisfies Meta<typeof FeaturedNovels>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FewNovels: Story = {
  args: {
    novels: [
      { id: 1, title: 'サイバーパンク・短編', author: 'ShortStoryMaster', description: '短いながらも深いサイバーパンクの世界を描く。', tags: ['短編', 'SF'] },
    ],
  },
};

export const Empty: Story = {
  args: {
    novels: [],
  },
};