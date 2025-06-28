import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Settings, Menu, BookOpen, PenTool } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-cyber-darker border-b border-cyber-blue/30 sticky top-0 z-50 backdrop-blur-sm">
      {/* Top notification bar */}
      <div className="bg-cyber-darker/80 text-xs text-cyber-gray px-4 py-1 flex justify-between items-center">
        <span>総掲載作品数: 1,234,567件 | 総ユーザー数: 987,654人</span>
        <div className="flex gap-4">
          <Link to="/login" className="text-cyber-blue hover:text-cyber-pink transition-colors">
            ログイン
          </Link>
          <Link to="/register" className="text-cyber-blue hover:text-cyber-pink transition-colors">
            ユーザー登録
          </Link>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyber-blue to-cyber-pink rounded-lg flex items-center justify-center shadow-lg shadow-cyber-blue/25">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent">
                CyberNovels
              </h1>
              <p className="text-xs text-cyber-gray">未来の小説プラットフォーム</p>
            </div>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-gray w-4 h-4" />
              <input
                type="text"
                placeholder="作品を検索..."
                className="w-full bg-cyber-dark border border-cyber-blue/30 rounded-lg py-2 pl-10 pr-4 text-cyber-light placeholder-cyber-gray focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-colors"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link to="/" className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
              location.pathname === '/' ? 'bg-cyber-blue/20 text-cyber-blue' : 'text-cyber-gray hover:text-cyber-blue'
            }`}>
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">小説を読もう</span>
            </Link>
            <Link to="/mypage" className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
              location.pathname === '/mypage' ? 'bg-cyber-pink/20 text-cyber-pink' : 'text-cyber-gray hover:text-cyber-pink'
            }`}>
              <PenTool className="w-4 h-4" />
              <span className="text-sm">作家ページ</span>
            </Link>
            <div className="flex items-center gap-2 text-cyber-gray">
              <User className="w-5 h-5" />
              <span className="text-sm">ユーザー名</span>
            </div>
            <button className="p-2 text-cyber-gray hover:text-cyber-blue transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;