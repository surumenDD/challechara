import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MessageSquare, Settings, User, BookOpen, Star, Heart, Clock, Eye } from 'lucide-react';

const UserProfilePage: React.FC = () => {
  const { userId } = useParams();

  const userWorks = [
    { id: 1, title: 'サイバーパンク・ラプソディ', status: '連載中', genre: 'SF/サイバーパンク', keywords: 'ハッカー,記憶喪失,企業陰謀', updatedAt: '2025/01/20 12:00' },
    { id: 2, title: '電脳世界の探偵', status: '完結', genre: 'ミステリー/SF', keywords: 'AI,探偵,未来', updatedAt: '2024/12/15 15:30' },
    { id: 3, title: 'ネオン街の詩人', status: '短編', genre: '文芸/SF', keywords: '詩,未来都市,芸術', updatedAt: '2024/11/28 20:00' },
  ];

  const recentActivities = [
    { type: 'activity', title: '新章「第二部」開始のお知らせ', date: '2025/01/18 18:00' },
    { type: 'activity', title: 'キャラクター設定資料公開', date: '2025/01/10 14:30' },
  ];

  const series = [
    { id: 1, title: 'サイバーパンク・サーガ', works: 2 },
    { id: 2, title: '未来探偵シリーズ', works: 3 },
  ];

  const bookmarks = [
    { id: 1, title: '量子コンピューターの夢', author: 'QuantumWriter' },
    { id: 2, title: 'AIと人間の境界線', author: 'CyberPhilosopher' },
    { id: 3, title: 'デジタル・レボリューション', author: 'TechVanguard' },
  ];

  const favoriteUsers = [
    { id: 1, username: 'QuantumWriter' },
    { id: 2, username: 'CyberPhilosopher' },
    { id: 3, username: 'TechVanguard' },
    { id: 4, username: 'FutureBard' },
  ];

  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-cyber-light mb-2">
              マイページ: ID {userId}
            </h1>
            <h2 className="text-xl text-cyber-blue">NeonWriter</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-cyber-blue text-white px-4 py-2 rounded-lg hover:bg-cyber-blue/80 transition-colors">
              <MessageSquare className="w-4 h-4" />
              メッセージ送信
            </button>
            <Link to="/settings" className="flex items-center gap-2 text-cyber-gray hover:text-cyber-blue transition-colors">
              <Settings className="w-4 h-4" />
              設定
            </Link>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="border-b border-cyber-blue/30 mb-8">
          <nav className="flex space-x-8">
            <Link to={`/user/${userId}`} className="py-3 border-b-2 border-cyber-blue text-cyber-blue font-semibold">
              トップ
            </Link>
            <Link to={`/user/${userId}/activities`} className="py-3 text-cyber-gray hover:text-cyber-light transition-colors">
              活動報告
            </Link>
            <Link to={`/user/${userId}/series`} className="py-3 text-cyber-gray hover:text-cyber-light transition-colors">
              シリーズ
            </Link>
            <Link to={`/user/${userId}/works`} className="py-3 text-cyber-gray hover:text-cyber-light transition-colors">
              作品
            </Link>
            <Link to={`/user/${userId}/reviews`} className="py-3 text-cyber-gray hover:text-cyber-light transition-colors">
              レビューした作品
            </Link>
            <Link to={`/user/${userId}/bookmarks`} className="py-3 text-cyber-gray hover:text-cyber-light transition-colors">
              ブックマーク
            </Link>
            <Link to={`/user/${userId}/rated`} className="py-3 text-cyber-gray hover:text-cyber-light transition-colors">
              評価された作品
            </Link>
            <Link to={`/user/${userId}/favorites`} className="py-3 text-cyber-gray hover:text-cyber-light transition-colors">
              お気に入りユーザ
            </Link>
            <Link to={`/user/${userId}/profile`} className="py-3 text-cyber-gray hover:text-cyber-light transition-colors">
              プロフィール
            </Link>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Activity Reports */}
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-cyber-blue">活動報告</h3>
                <Link to={`/user/${userId}/activities`} className="text-cyber-pink hover:text-cyber-pink/80 text-sm transition-colors">
                  活動報告一覧 »
                </Link>
              </div>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="p-3 bg-cyber-dark/30 rounded">
                    <Link to={`/activity/${index}`} className="text-cyber-light hover:text-cyber-blue transition-colors">
                      {activity.title}
                    </Link>
                    <div className="text-sm text-cyber-gray mt-1">{activity.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Series */}
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-cyber-green">シリーズ</h3>
                <Link to={`/user/${userId}/series`} className="text-cyber-pink hover:text-cyber-pink/80 text-sm transition-colors">
                  シリーズ一覧 »
                </Link>
              </div>
              <div className="space-y-3">
                {series.map((serie) => (
                  <div key={serie.id} className="p-3 bg-cyber-dark/30 rounded">
                    <Link to={`/series/${serie.id}`} className="text-cyber-light hover:text-cyber-green transition-colors">
                      {serie.title}
                    </Link>
                    <div className="text-sm text-cyber-gray mt-1">{serie.works}作品</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Works List */}
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-cyber-orange">作品一覧</h3>
                <Link to={`/user/${userId}/works`} className="text-cyber-pink hover:text-cyber-pink/80 text-sm transition-colors">
                  作品一覧へ »
                </Link>
              </div>
              <div className="space-y-4">
                {userWorks.map((work) => (
                  <div key={work.id} className="p-4 bg-cyber-dark/30 rounded-lg hover:bg-cyber-orange/5 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 text-xs rounded ${
                          work.status === '連載中' ? 'bg-cyber-blue/20 text-cyber-blue' :
                          work.status === '完結' ? 'bg-cyber-pink/20 text-cyber-pink' :
                          'bg-cyber-green/20 text-cyber-green'
                        }`}>
                          {work.status}
                        </span>
                        <Link to={`/book/${work.id}`} className="text-cyber-light hover:text-cyber-orange transition-colors font-medium">
                          {work.title}
                        </Link>
                      </div>
                    </div>
                    <div className="text-sm text-cyber-gray space-y-1">
                      <div>ジャンル: {work.genre}</div>
                      <div>キーワード: {work.keywords}</div>
                      <div>最終更新: {work.updatedAt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cyber-pink mb-4">レビューした作品</h3>
              <div className="text-center py-8 text-cyber-gray">
                レビューした作品はありません
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Bookmarks */}
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-cyber-blue">ブックマーク</h3>
                <Link to={`/user/${userId}/bookmarks`} className="text-cyber-pink hover:text-cyber-pink/80 text-sm transition-colors">
                  ブックマークを見る »
                </Link>
              </div>
              <div className="space-y-3">
                {bookmarks.map((bookmark) => (
                  <div key={bookmark.id} className="text-sm">
                    <Link to={`/book/${bookmark.id}`} className="text-cyber-light hover:text-cyber-blue transition-colors block">
                      {bookmark.title}
                    </Link>
                    <div className="text-cyber-gray text-xs mt-1">
                      by <Link to={`/user/${bookmark.author}`} className="text-cyber-pink hover:text-cyber-pink/80">{bookmark.author}</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Users */}
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-cyber-green">お気に入りユーザ</h3>
                <Link to={`/user/${userId}/favorites`} className="text-cyber-pink hover:text-cyber-pink/80 text-sm transition-colors">
                  お気に入りユーザを見る »
                </Link>
              </div>
              <div className="space-y-2">
                {favoriteUsers.map((user) => (
                  <Link key={user.id} to={`/user/${user.username}`} className="block text-sm text-cyber-light hover:text-cyber-green transition-colors py-1">
                    {user.username}
                  </Link>
                ))}
              </div>
            </div>

            {/* Ad space */}
            <div className="bg-gradient-to-br from-cyber-pink/20 to-cyber-blue/20 border border-cyber-pink/30 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-cyber-pink mb-2">広告スペース</h3>
              <div className="bg-cyber-dark/50 rounded-lg p-8 text-cyber-gray">
                300×250<br />広告バナー
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;