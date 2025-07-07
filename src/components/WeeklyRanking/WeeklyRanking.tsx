import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Eye } from 'lucide-react'; // 必要なアイコンのみをインポート

interface Novel {
  id: number;
  title: string;
  author: string;
  views: string;
  status: '連載中' | '完結';
}

interface WeeklyRankingProps {
  novels: Novel[];
}

/**
 * WeeklyRanking コンポーネント
 * 週間小説ランキングを表示します。
 * @param {WeeklyRankingProps} props - 小説データの配列を含むプロップス
 */
const WeeklyRanking: React.FC<WeeklyRankingProps> = ({ novels }) => {
  return (
    <section className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-cyber-blue flex items-center gap-2">
          <Crown className="w-5 h-5" />
          週間ランキング
        </h2>
        <Link to="/ranking" className="text-cyber-pink hover:text-cyber-pink/80 text-sm transition-colors">
          もっと見る →
        </Link>
      </div>
      <div className="space-y-4">
        {novels.map((novel, index) => (
          <div key={novel.id} className="flex items-center gap-4 p-3 bg-cyber-dark/50 rounded-lg hover:bg-cyber-blue/5 transition-colors">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              index === 0 ? 'bg-yellow-500 text-black' :
              index === 1 ? 'bg-gray-400 text-black' :
              index === 2 ? 'bg-amber-600 text-white' :
              'bg-cyber-blue/20 text-cyber-blue'
            }`}>
              {index + 1}
            </div>
            <div className="flex-1">
              <Link to={`/book/${novel.id}`} className="text-cyber-light hover:text-cyber-blue transition-colors">
                {novel.title}
              </Link>
              <div className="text-sm text-cyber-gray">
                作者: <Link to={`/user/${novel.author}`} className="text-cyber-pink hover:text-cyber-pink/80">{novel.author}</Link>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-cyber-gray flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {novel.views}
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                novel.status === '連載中' ? 'bg-cyber-blue/20 text-cyber-blue' : 'bg-cyber-pink/20 text-cyber-pink'
              }`}>
                {novel.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyRanking;