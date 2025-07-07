import React from 'react';

// プロップスは現在のところ不要ですが、将来的に作品情報を渡す場合に備えておきます
// interface WorkInfoCardProps { /* some props */ }

const WorkInfoCard: React.FC = () => {
  return (
    <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg">
      <div className="flex items-center justify-between p-4 bg-cyber-blue/10 border-b border-cyber-blue/30">
        <h3 className="text-lg font-semibold text-cyber-blue">作品情報</h3>
        <button className="text-cyber-blue hover:text-cyber-blue/80">
          ▼
        </button>
      </div>
      {/* 作品情報の詳細コンテンツはここに表示されることを想定（今は空） */}
      <div className="p-4 text-cyber-gray text-sm">
        {/* 例: 作品の概要、ジャンル、タグなどの情報が入ります */}
        <p>ここに作品の詳細情報が入ります。</p>
        <p>（あらすじ、キーワードなど）</p>
      </div>
    </div>
  );
};

export default WorkInfoCard;