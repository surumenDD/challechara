import React from 'react';
import TwitterWidget from '../TwitterWidget/TwitterWidget'; // パスを確認してください
import MiniBanners from '../MiniBanners/MiniBanners';     // パスを確認してください
import AdSpace from '../AdSpace/AdSpace';               // 新しいAdSpaceをインポート

/**
 * Sidebar コンポーネント
 * ホームページのサイドバーに表示されるウィジェットや広告をまとめたものです。
 */
const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <TwitterWidget />
      <AdSpace />
      <MiniBanners />
    </div>
  );
};

export default Sidebar;