import React from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import WeeklyRanking from '../components/WeeklyRanking/WeeklyRanking';
import UpdatedNovels from '../components/UpdatedNovels/UpdatedNovels';
import FeaturedNovels from '../components/FeaturedNovels/FeaturedNovels';
import Sidebar from '../components/Sidebar/Sidebar';


// 型定義の共通化を強く推奨します
// 例: src/types/novel.d.ts からインポート
interface Novel {
  id: number;
  title: string;
  author: string;
  views: string;
  status: '連載中' | '完結';
}

interface UpdatedNovel {
  id: number;
  title: string;
  author: string;
  updatedAt: string;
  episode: string;
}
interface FeaturedNovel {
  id: number;
  title: string;
  author: string;
  description: string;
  tags: string[];
}

const HomePage: React.FC = () => {
  const rankingNovels: Novel[] = [
    { id: 1, title: 'サイバーパンク・ラプソディ', author: 'NeonWriter', views: '1,234,567', status: '連載中' },
    { id: 2, title: '電脳世界の恋愛シミュレーション', author: 'DigitalLover', views: '987,654', status: '完結' },
    { id: 3, title: '未来都市の影を歩く者', author: 'ShadowRunner', views: '876,543', status: '連載中' },
    { id: 4, title: 'AIと人間の境界線', author: 'CyberPhilosopher', views: '765,432', status: '連載中' },
    { id: 5, title: 'ネオン街の記憶商人', author: 'MemoryDealer', views: '654,321', status: '完結' },
  ];

  const updatedNovels: UpdatedNovel[] = [
    { id: 1, title: 'サイバーパンク・ラプソディ', author: 'NeonWriter', updatedAt: '2分前', episode: '第45話' },
    { id: 2, title: '電脳世界の恋愛シミュレーション', author: 'DigitalLover', updatedAt: '15分前', episode: '第32話' },
    { id: 3, title: '未来都市の影を歩く者', author: 'ShadowRunner', updatedAt: '1時間前', episode: '第21話' },
    { id: 4, title: 'AIと人間の境界線', author: 'CyberPhilosopher', updatedAt: '3時間前', episode: '第67話' },
  ];

  const featuredNovels: FeaturedNovel[] = [
    { id: 1, title: 'サイバーパンク・ラプソディ', author: 'NeonWriter', description: '2087年、ネオンが煌めく未来都市。一人のハッカーが巨大企業に立ち向かう...', tags: ['SF', 'サイバーパンク', 'アクション'] },
    { id: 2, title: '電脳世界の恋愛シミュレーション', author: 'DigitalLover', description: 'VR空間で出会った二人の恋愛物語。現実と仮想の境界が曖昧になる中で...', tags: ['恋愛', 'SF', 'VR'] },
  ];

  return (
    <div className="min-h-screen bg-cyber-dark">
      <HeroBanner />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* メインコンテンツ部分 */}
          <div className="lg:col-span-2 space-y-8">
            <WeeklyRanking novels={rankingNovels} />
            <UpdatedNovels novels={updatedNovels} /> {/* 更新された小説コンポーネントを配置 */}
            <FeaturedNovels novels={featuredNovels} /> {/* 注目の作品コンポーネントを配置 */}
          </div>

          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;