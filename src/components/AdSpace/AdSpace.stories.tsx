import type { Meta, StoryObj } from '@storybook/react';
import AdSpace from './AdSpace'; // AdSpace.tsxのパスを適宜調整してください
import { BrowserRouter as Router } from 'react-router-dom'; // Linkコンポーネントに必要です

const meta = {
  title: 'コンポーネント/AdSpace', // Storybookでのコンポーネントの分類
  component: AdSpace,
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
        <div className="bg-cyber-dark p-4"> {/* Sidebarと同じ背景色を適用 */}
          <Story />
        </div>
      </Router>
    ),
  ],
} satisfies Meta<typeof AdSpace>;

export default meta;
type Story = StoryObj<typeof meta>;

// AdSpaceのデフォルトストーリー
export const Default: Story = {
  args: {}, // AdSpaceは現在プロップスを受け取らないため、argsは空です
};