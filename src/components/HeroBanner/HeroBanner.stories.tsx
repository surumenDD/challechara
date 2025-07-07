import type { Meta, StoryObj } from '@storybook/react';
import HeroBanner from './HeroBanner'; // HeroBanner.tsxのパスを適宜調整してください
import { BrowserRouter as Router } from 'react-router-dom'; // Linkコンポーネントに必要です

const meta = {
  title: 'コンポーネント/HeroBanner', // Storybookでのコンポーネントの分類
  component: HeroBanner,
  parameters: {
    // オプション：Storybookでの表示を良くするためのレイアウト設定
    layout: 'fullscreen', // ヒーローバナーは全幅で表示されることが多いので'fullscreen'が適切かもしれません
  },
  tags: ['autodocs'], // コンポーネントのドキュメントを自動生成します
  decorators: [
    // コンポーネントをRouterでラップするためのデコレーター。<Link>コンポーネントに必須です。
    (Story) => (
      <Router>
        {/* アプリケーションのグローバルな背景色を適用して、サイバーパンクテーマのスタイルが正しく表示されるようにします。*/}
        {/* HeroBannerは自身の背景を持つため、ここではシンプルなラッパーで十分です */}
        <div className="bg-cyber-dark min-h-[400px]"> {/* 背景色と最小高さを設定してコンポーネントを視認しやすくします */}
          <Story />
        </div>
      </Router>
    ),
  ],
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

// HeroBannerのデフォルトストーリー
export const Default: Story = {
  args: {}, // HeroBannerは現在プロップスを受け取らないため、argsは空です
};