import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar'; // Sidebar.tsx のパスを適宜調整してください
import { BrowserRouter as Router } from 'react-router-dom'; // Linkコンポーネントに必要です

const meta = {
  title: 'コンポーネント/Sidebar', // Storybookでのコンポーネントの分類
  component: Sidebar,
  parameters: {
    // オプション：Storybookでの表示を良くするためのレイアウト設定
    layout: 'padded', // または 'fullscreen', 'centered'
  },
  tags: ['autodocs'], // コンポーネントのドキュメントを自動生成します
  decorators: [
    // コンポーネントをRouterでラップするためのデコレーター。<Link>コンポーネントに必須です。
    (Story) => (
      <Router>
        {/* アプリケーションのグローバルな背景色を適用して、サイバーパンクテーマのスタイルが正しく表示されるようにします。*/}
        <div className="bg-cyber-dark p-4 min-h-screen">
          <Story />
        </div>
      </Router>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sidebarのデフォルトストーリー
export const Default: Story = {
  args: {}, // Sidebarは現在プロップスを受け取らないため、argsは空です
};