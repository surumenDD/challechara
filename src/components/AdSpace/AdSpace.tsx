import React from 'react';
import { Link } from 'react-router-dom'; // リンクのために必要

/**
 * AdSpace コンポーネント
 * プレミアム会員募集の広告スペースを表示します。
 */
const AdSpace: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-cyber-pink/20 to-cyber-blue/20 border border-cyber-pink/30 rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold text-cyber-pink mb-2">プレミアム会員募集</h3>
      <p className="text-sm text-cyber-gray mb-4">広告なし・高速読み込み・専用機能が使い放題</p>
      <Link to="/premium" className="bg-gradient-to-r from-cyber-pink to-cyber-blue text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-pink/25 transition-all">
        詳細を見る
      </Link>
    </div>
  );
};

export default AdSpace;