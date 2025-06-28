import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, TrendingUp, Clock, Star, Eye, Heart, MessageCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  const rankingNovels = [
    { id: 1, title: 'サイバーパンク・ラプソディ', author: 'NeonWriter', views: '1,234,567', status: '連載中' },
    { id: 2, title: '電脳世界の恋愛シミュレーション', author: 'DigitalLover', views: '987,654', status: '完結' },
    { id: 3, title: '未来都市の影を歩く者', author: 'ShadowRunner', views: '876,543', status: '連載中' },
    { id: 4, title: 'AIと人間の境界線', author: 'CyberPhilosopher', views: '765,432', status: '連載中' },
    { id: 5, title: 'ネオン街の記憶商人', author: 'MemoryDealer', views: '654,321', status: '完結' },
  ];

  const updatedNovels = [
    { id: 1, title: 'サイバーパンク・ラプソディ', author: 'NeonWriter', updatedAt: '2分前', episode: '第45話' },
    { id: 2, title: '電脳世界の恋愛シミュレーション', author: 'DigitalLover', updatedAt: '15分前', episode: '第32話' },
    { id: 3, title: '未来都市の影を歩く者', author: 'ShadowRunner', updatedAt: '1時間前', episode: '第21話' },
    { id: 4, title: 'AIと人間の境界線', author: 'CyberPhilosopher', updatedAt: '3時間前', episode: '第67話' },
  ];

  const featuredNovels = [
    { id: 1, title: 'サイバーパンク・ラプソディ', author: 'NeonWriter', description: '2087年、ネオンが煌めく未来都市。一人のハッカーが巨大企業に立ち向かう...', tags: ['SF', 'サイバーパンク', 'アクション'] },
    { id: 2, title: '電脳世界の恋愛シミュレーション', author: 'DigitalLover', description: 'VR空間で出会った二人の恋愛物語。現実と仮想の境界が曖昧になる中で...', tags: ['恋愛', 'SF', 'VR'] },
  ];

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-cyber-blue/20 to-cyber-pink/20 border-b border-cyber-blue/30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent mb-4">
              未来の物語を創造しよう
            </h1>
            <p className="text-cyber-gray text-lg mb-6">
              サイバーパンクな世界で、あなたの想像力を解放してください
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/edit" className="bg-gradient-to-r from-cyber-blue to-cyber-pink text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-blue/25 transition-all">
                小説を書く
              </Link>
              <Link to="/browse" className="border border-cyber-blue text-cyber-blue px-6 py-3 rounded-lg font-semibold hover:bg-cyber-blue/10 transition-all">
                小説を探す
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Weekly Ranking */}
            <section className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-cyber-blue flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  週間ランキング
                </h2>
                <Link to="/ranking" className="text-cyber-pink hover:text-cyber-pink/80 text-sm transition-colors">
                  もっと見る →
                </Link>
              </div>
              <div className="space-y-4">
                {rankingNovels.map((novel, index) => (
                  <div key={novel.id} className="flex items-center gap-4 p-3 bg-cyber-dark/50 rounded-lg hover:bg-cyber-blue/5 transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0 ? 'bg-yellow-500 text-black' :
                      index === 1 ? 'bg-gray-400 text-black' :
                      index === 2 ? 'bg-amber-600 text-white' :
                      'bg-cyber-blue/20 text-cyber-blue'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <Link to={`/book/${novel.id}`} className="text-cyber-light hover:text-cyber-blue transition-colors">
                        {novel.title}
                      </Link>
                      <div className="text-sm text-cyber-gray">
                        作者: <Link to={`/user/${novel.author}`} className="text-cyber-pink hover:text-cyber-pink/80">{novel.author}</Link>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-cyber-gray flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {novel.views}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        novel.status === '連載中' ? 'bg-cyber-blue/20 text-cyber-blue' : 'bg-cyber-pink/20 text-cyber-pink'
                      }`}>
                        {novel.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Updated Novels */}
            <section className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <h2 className="text-xl font-bold text-cyber-green flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5" />
                更新された小説
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {updatedNovels.map((novel) => (
                  <div key={novel.id} className="p-3 bg-cyber-dark/50 rounded-lg hover:bg-cyber-green/5 transition-colors">
                    <Link to={`/book/${novel.id}`} className="text-cyber-light hover:text-cyber-green transition-colors block mb-1">
                      {novel.title}
                    </Link>
                    <div className="text-sm text-cyber-gray">
                      <Link to={`/user/${novel.author}`} className="text-cyber-pink hover:text-cyber-pink/80">{novel.author}</Link>
                      <span className="mx-2">•</span>
                      <span>{novel.episode}</span>
                      <span className="mx-2">•</span>
                      <span>{novel.updatedAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Novels */}
            <section className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <h2 className="text-xl font-bold text-cyber-orange flex items-center gap-2 mb-6">
                <Star className="w-5 h-5" />
                注目の作品
              </h2>
              <div className="space-y-6">
                {featuredNovels.map((novel) => (
                  <div key={novel.id} className="p-4 bg-cyber-dark/50 rounded-lg hover:bg-cyber-orange/5 transition-colors">
                    <Link to={`/book/${novel.id}`} className="text-lg font-semibold text-cyber-light hover:text-cyber-orange transition-colors block mb-2">
                      {novel.title}
                    </Link>
                    <div className="text-sm text-cyber-gray mb-3">
                      作者: <Link to={`/user/${novel.author}`} className="text-cyber-pink hover:text-cyber-pink/80">{novel.author}</Link>
                    </div>
                    <p className="text-cyber-gray mb-3 line-clamp-2">
                      {novel.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {novel.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Twitter Widget */}
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cyber-blue mb-4">公式Twitter</h3>
              <div className="space-y-3">
                <div className="p-3 bg-cyber-dark/50 rounded">
                  <p className="text-sm text-cyber-gray">新機能「AIアシスタント執筆支援」がリリースされました！</p>
                  <span className="text-xs text-cyber-gray">2時間前</span>
                </div>
                <div className="p-3 bg-cyber-dark/50 rounded">
                  <p className="text-sm text-cyber-gray">今週のランキング1位は『サイバーパンク・ラプソディ』です！</p>
                  <span className="text-xs text-cyber-gray">5時間前</span>
                </div>
              </div>
            </div>

            {/* Ad Space */}
            <div className="bg-gradient-to-br from-cyber-pink/20 to-cyber-blue/20 border border-cyber-pink/30 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-cyber-pink mb-2">プレミアム会員募集</h3>
              <p className="text-sm text-cyber-gray mb-4">広告なし・高速読み込み・専用機能が使い放題</p>
              <button className="bg-gradient-to-r from-cyber-pink to-cyber-blue text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-pink/25 transition-all">
                詳細を見る
              </button>
            </div>

            {/* Mini banners */}
            <div className="space-y-4">
              <div className="bg-cyber-green/20 border border-cyber-green/30 rounded-lg p-4 text-center">
                <h4 className="text-cyber-green font-semibold mb-2">執筆コンテスト開催中</h4>
                <p className="text-xs text-cyber-gray">賞金総額100万円</p>
              </div>
              <div className="bg-cyber-orange/20 border border-cyber-orange/30 rounded-lg p-4 text-center">
                <h4 className="text-cyber-orange font-semibold mb-2">書籍化決定作品</h4>
                <p className="text-xs text-cyber-gray">『電脳世界の冒険』</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;