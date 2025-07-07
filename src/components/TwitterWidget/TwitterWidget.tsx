import React from 'react';

/**
 * TwitterWidget コンポーネント
 * 公式Twitterの最新情報を表示します。
 */
const TwitterWidget: React.FC = () => {
  return (
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
  );
};

export default TwitterWidget;
          