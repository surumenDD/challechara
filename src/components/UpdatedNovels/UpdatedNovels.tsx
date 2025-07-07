import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react'; // 必要なアイコンのみをインポート

interface UpdatedNovel {
  id: number;
  title: string;
  author: string;
  updatedAt: string;
  episode: string;
}

interface UpdatedNovelsProps {
  novels: UpdatedNovel[];
}

/**
 * UpdatedNovels コンポーネント
 * 最近更新された小説のリストを表示します。
 * @param {UpdatedNovelsProps} props - 更新された小説データの配列を含むプロップス
 */
const UpdatedNovels: React.FC<UpdatedNovelsProps> = ({ novels }) => {
  return (
    <section className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
      <h2 className="text-xl font-bold text-cyber-green flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5" />
        更新された小説
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {novels.map((novel) => (
          <div key={novel.id} className="p-3 bg-cyber-dark/50 rounded-lg hover:bg-cyber-green/5 transition-colors">
            <Link to={`/book/${novel.id}`} className="text-cyber-light hover:text-cyber-green transition-colors block mb-1">
              {novel.title}
            </Link>
            <div className="text-sm text-cyber-gray">
              <Link to={`/user/${novel.author}`} className="text-cyber-pink hover:text-cyber-pink/80">{novel.author}</Link>
              <span className="mx-2">•</span>
              <span>{novel.episode}</span>
              <span className="mx-2">•</span>
              <span>{novel.updatedAt}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpdatedNovels;