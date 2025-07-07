import React from 'react';

/**
 * MiniBanners コンポーネント
 * 小型のバナー広告や告知を表示します。
 */
const MiniBanners: React.FC = () => {
  return (
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
  );
};

export default MiniBanners;