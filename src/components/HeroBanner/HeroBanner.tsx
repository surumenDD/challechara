import React from 'react';
import { Link } from 'react-router-dom';

/**
 * HeroBanner コンポーネント
 * アプリケーションのメインページに表示されるヒーローバナーです。
 * ユーザーに小説の執筆や検索を促します。
 */
const HeroBanner: React.FC = () => {
  return (
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
  );
};

export default HeroBanner;