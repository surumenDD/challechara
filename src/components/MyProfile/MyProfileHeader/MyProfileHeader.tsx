import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, BarChart3, Settings, Shield } from 'lucide-react';

interface MyProfileHeaderProps {
  novelTitle: string;
  novelStatus: string;
  // 必要であれば、Link の to プロパティなどもpropsとして渡せます
}

const MyProfileHeader: React.FC<MyProfileHeaderProps> = ({ novelTitle, novelStatus }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-cyber-pink/20 text-cyber-pink px-2 py-1 rounded text-sm">{novelStatus}</span>
          <h1 className="text-2xl font-bold text-cyber-light">
            {novelTitle}
            <Link to="/edit-novel-details" className="inline-block"> {/* 仮のリンク先、実際の編集ページへ */}
              <Edit className="inline w-5 h-5 ml-2 text-cyber-blue cursor-pointer hover:text-cyber-blue/80" />
            </Link>
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
  );
};

export default MyProfileHeader;