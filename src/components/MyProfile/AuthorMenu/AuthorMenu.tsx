import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Settings, Shield } from 'lucide-react';

const AuthorMenu: React.FC = () => {
  return (
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
  );
};

export default AuthorMenu;