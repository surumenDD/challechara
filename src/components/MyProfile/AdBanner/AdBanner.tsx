import React from 'react';

// プロップスは現在のところ不要ですが、将来的に広告内容を渡す場合に備えておきます
// interface AdBannerProps { /* some props */ }

const AdBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-cyber-orange/20 to-cyber-pink/20 border border-cyber-orange/30 rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold text-cyber-orange mb-2">執筆支援ツール</h3>
      <div className="bg-cyber-dark/50 rounded-lg p-8 text-cyber-gray">
        300×250<br />広告バナー
      </div>
    </div>
  );
};

export default AdBanner;