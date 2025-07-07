import type { Meta, StoryObj } from '@storybook/react';
import WeeklyRanking from './WeeklyRanking';
import { BrowserRouter as Router } from 'react-router-dom'; // Linkコンポーネントに必要です

const meta = {
  title: 'コンポーネント/WeeklyRanking',
  component: WeeklyRanking,
  parameters: {
    layout: 'padded', // コンポーネントがコンテンツの塊なのでpaddedが適切
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Router>
        {/* コンポーネントの背景色が適切に見えるように、親の背景色を設定 */}
        <div className="bg-cyber-dark p-4">
          <Story />
        </div>
      </Router>
    ),
  ],
  // デフォルトのprops値を設定
  args: {
    novels: [
      { id: 1, title: 'サイバーパンク・ラプソディ', author: 'NeonWriter', views: '1,234,567', status: '連載中' },
      { id: 2, title: '電脳世界の恋愛シミュレーション', author: 'DigitalLover', views: '987,654', status: '完結' },
      { id: 3, title: '未来都市の影を歩く者', author: 'ShadowRunner', views: '876,543', status: '連載中' },
      { id: 4, title: 'AIと人間の境界線', author: 'CyberPhilosopher', views: '765,432', status: '連載中' },
      { id: 5, title: 'ネオン街の記憶商人', author: 'MemoryDealer', views: '654,321', status: '完結' },
    ],
  },
} satisfies Meta<typeof WeeklyRanking>;

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトのランキング表示
export const Default: Story = {
  // argsはmetaで定義されているため、ここでは空でOK
};

// データが少ない場合のランキング表示
export const FewNovels: Story = {
  args: {
    novels: [
      { id: 1, title: 'サイバーパンク・ラプソディ II', author: 'NeonWriter', views: '500,000', status: '連載中' },
      { id: 2, title: '電脳世界の恋の続き', author: 'DigitalLover', views: '300,000', status: '完結' },
    ],
  },
};

// 空のランキング表示
export const EmptyRanking: Story = {
  args: {
    novels: [],
  },
};