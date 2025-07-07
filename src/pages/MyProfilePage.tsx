import React from 'react';

// 型定義の共通化を強く推奨します
// 例: src/types/work.d.ts のようなファイルからインポート
interface MyWork {
  id: number;
  title: string;
  status: '連載中' | '完結' | '短編';
  episodes: number;
  lastUpdated: string; // YYYY/MM/DD HH:mm
  views: string;
}

interface Episode { // EpisodeManagement コンポーネネントの型と合わせる
  id: number;
  title: string;
  status: 'published' | 'draft';
  lastUpdated: string;
}


// 新しく作成したコンポーネントをインポートします
import MyProfileHeader from '../components/MyProfile/MyProfileHeader/MyProfileHeader';
import WorkInfoCard from '../components/MyProfile/WorkInfoCard/WorkInfoCard';
import EpisodeManagement from '../components/MyProfile/EpisodeManagement/EpisodeManagement';
import MyPageSidebar from '../components/MyProfile/MyPageSidebar/MyPageSidebar';


const MyProfilePage: React.FC = () => {
  // 本来はAPIから取得するデータ
  const myWorks: MyWork[] = [
    { id: 1, title: 'サイバーパンク・ラプソディ', status: '連載中', episodes: 45, lastUpdated: '2025/01/20 12:00', views: '1,234,567' },
    { id: 2, title: '電脳世界の探偵', status: '完結', episodes: 32, lastUpdated: '2024/12/15 15:30', views: '987,654' },
    { id: 3, title: 'ネオン街の詩人', status: '短編', episodes: 1, lastUpdated: '2024/11/28 20:00', views: '456,789' },
  ];

  // 例として、最初の作品のエピソードデータを使用
  const currentWorkId = myWorks[0]?.id || 1; // デフォルト値
  const currentWorkTitle = myWorks[0]?.title || '作品がありません';
  const currentWorkStatus = myWorks[0]?.status || '';

  // EpisodeManagement に渡すためのエピソードデータ
  // 実際には、選択された作品のエピソードをフィルタリングまたはAPIから取得します
  const publishedEpisodes: Episode[] = [
    { id: 45, title: 'ネオン街の出会い', status: 'published', lastUpdated: '2025/01/20 12:00' },
    { id: 44, title: '電脳空間への侵入', status: 'published', lastUpdated: '2025/01/19 10:30' },
    { id: 43, title: '記憶の断片', status: 'published', lastUpdated: '2025/01/18 09:00' },
    { id: 42, title: '企業の陰謀', status: 'published', lastUpdated: '2025/01/17 14:15' },
    { id: 41, title: '仲間との出会い', status: 'published', lastUpdated: '2025/01/16 16:45' },
  ];
  const draftEpisodes: Episode[] = [
    { id: 99, title: '次のエピソードの構想', status: 'draft', lastUpdated: '2025/01/21 08:00' },
    { id: 98, title: 'プロットメモ', status: 'draft', lastUpdated: '2025/01/20 23:00' },
  ];

  // 統計情報データ
  const totalViews = '2,678,900';
  const totalComments = '1,234';
  const totalBookmarks = '5,678';


  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header コンポーネントを配置 */}
        <MyProfileHeader novelTitle={currentWorkTitle} novelStatus={currentWorkStatus} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* メインコンテンツ部分 */}
          <div className="lg:col-span-2 space-y-8">
            <WorkInfoCard />
            <EpisodeManagement
              publishedEpisodes={publishedEpisodes}
              draftEpisodes={draftEpisodes}
              bookId={currentWorkId}
            />
          </div>

          {/* Sidebar コンポーネントを配置 */}
          <MyPageSidebar
            totalViews={totalViews}
            totalComments={totalComments}
            totalBookmarks={totalBookmarks}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;