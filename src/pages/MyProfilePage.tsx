import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Edit, BarChart3, Settings, Shield, BookOpen, Clock, Eye, MessageSquare } from 'lucide-react';

const MyProfilePage: React.FC = () => {
  const myWorks = [
    { id: 1, title: 'サイバーパンク・ラプソディ', status: '連載中', episodes: 45, lastUpdated: '2025/01/20 12:00', views: '1,234,567' },
    { id: 2, title: '電脳世界の探偵', status: '完結', episodes: 32, lastUpdated: '2024/12/15 15:30', views: '987,654' },
    { id: 3, title: 'ネオン街の詩人', status: '短編', episodes: 1, lastUpdated: '2024/11/28 20:00', views: '456,789' },
  ];

  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-cyber-pink/20 text-cyber-pink px-2 py-1 rounded text-sm">連載</span>
              <h1 className="text-2xl font-bold text-cyber-light">
                サイバーパンク・ラプソディ
                <Edit className="inline w-5 h-5 ml-2 text-cyber-blue cursor-pointer hover:text-cyber-blue/80" />
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/analytics" className="flex items-center gap-2 text-cyber-blue hover:text-cyber-blue/80 transition-colors">
              <BarChart3 className="w-4 h-4" />
              アクセス解析
            </Link>
            <Link to="/settings" className="flex items-center gap-2 text-cyber-gray hover:text-cyber-blue transition-colors">
              <Settings className="w-4 h-4" />
              設定
            </Link>
            <Link to="/manage" className="flex items-center gap-2 text-cyber-gray hover:text-cyber-blue transition-colors">
              <Shield className="w-4 h-4" />
              管理
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Work Info */}
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg">
              <div className="flex items-center justify-between p-4 bg-cyber-blue/10 border-b border-cyber-blue/30">
                <h3 className="text-lg font-semibold text-cyber-blue">作品情報</h3>
                <button className="text-cyber-blue hover:text-cyber-blue/80">
                  ▼
                </button>
              </div>
            </div>

            {/* Episodes */}
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg">
              <div className="border-b border-cyber-blue/30">
                <div className="flex">
                  <button className="px-6 py-3 border-b-2 border-cyber-blue text-cyber-blue font-semibold">
                    投稿済 (45)
                  </button>
                  <button className="px-6 py-3 text-cyber-gray hover:text-cyber-light transition-colors">
                    下書き (3)
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <button className="flex items-center gap-2 text-cyber-blue hover:text-cyber-blue/80 text-sm transition-colors border border-cyber-blue/30 px-3 py-1 rounded">
                    章を設定
                  </button>
                  <Link to="/edit/new" className="flex items-center gap-2 bg-gradient-to-r from-cyber-blue to-cyber-pink text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all">
                    <PlusCircle className="w-4 h-4" />
                    新しいエピソード
                  </Link>
                </div>

                <div className="space-y-2">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-cyber-dark/30 rounded-lg hover:bg-cyber-blue/5 transition-colors group">
                      <div className="flex items-center gap-4">
                        <span className="px-2 py-1 bg-cyber-gray/20 text-cyber-gray text-xs rounded border">
                          ep.{45 - index}
                        </span>
                        <Link to={`/read/1/${45 - index}`} className="text-cyber-light hover:text-cyber-blue transition-colors group-hover:text-cyber-blue">
                          第{45 - index}話　{index === 0 ? 'ネオン街の出会い' : index === 1 ? '電脳空間への侵入' : index === 2 ? '記憶の断片' : index === 3 ? '企業の陰謀' : '仲間との出会い'}
                        </Link>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-cyber-gray">
                          2025/01/{20 - index} 12:00
                        </span>
                        <Link to={`/edit/1/${45 - index}`} className="text-cyber-pink hover:text-cyber-pink/80 text-sm transition-colors">
                          編集
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Menu */}
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cyber-blue mb-4">投稿</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/create" className="flex items-center gap-2 text-cyber-light hover:text-cyber-blue transition-colors">
                    <BookOpen className="w-4 h-4" />
                    作品の作成・編集
                  </Link>
                </li>
                <li>
                  <Link to="/series" className="flex items-center gap-2 text-cyber-light hover:text-cyber-blue transition-colors">
                    <BookOpen className="w-4 h-4" />
                    シリーズ設定
                  </Link>
                </li>
                <li>
                  <Link to="/initial-settings" className="flex items-center gap-2 text-cyber-light hover:text-cyber-blue transition-colors">
                    <Settings className="w-4 h-4" />
                    作品初期設定
                  </Link>
                </li>
                <li>
                  <Link to="/backup" className="flex items-center gap-2 text-cyber-light hover:text-cyber-blue transition-colors">
                    <Shield className="w-4 h-4" />
                    執筆バックアップ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Stats */}
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cyber-green mb-4">統計情報</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-cyber-gray">
                    <Eye className="w-4 h-4" />
                    総PV数
                  </span>
                  <span className="text-cyber-light font-semibold">2,678,900</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-cyber-gray">
                    <MessageSquare className="w-4 h-4" />
                    感想数
                  </span>
                  <span className="text-cyber-light font-semibold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-cyber-gray">
                    <BookOpen className="w-4 h-4" />
                    ブックマーク
                  </span>
                  <span className="text-cyber-light font-semibold">5,678</span>
                </div>
              </div>
            </div>

            {/* Ad space */}
            <div className="bg-gradient-to-br from-cyber-orange/20 to-cyber-pink/20 border border-cyber-orange/30 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-cyber-orange mb-2">執筆支援ツール</h3>
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

export default MyProfilePage;