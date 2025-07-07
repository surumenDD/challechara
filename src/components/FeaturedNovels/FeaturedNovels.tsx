import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react'; // 必要なアイコンのみをインポート

interface FeaturedNovel {
  id: number;
  title: string;
  author: string;
  description: string;
  tags: string[];
}

interface FeaturedNovelsProps {
  novels: FeaturedNovel[];
}

/**
 * FeaturedNovels コンポーネント
 * 注目の作品のリストを表示します。
 * @param {FeaturedNovelsProps} props - 注目の作品データの配列を含むプロップス
 */
const FeaturedNovels: React.FC<FeaturedNovelsProps> = ({ novels }) => {
  return (
    <section className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
      <h2 className="text-xl font-bold text-cyber-orange flex items-center gap-2 mb-6">
        <Star className="w-5 h-5" />
        注目の作品
      </h2>
      <div className="space-y-6">
        {novels.map((novel) => (
          <div key={novel.id} className="p-4 bg-cyber-dark/50 rounded-lg hover:bg-cyber-orange/5 transition-colors">
            <Link to={`/book/${novel.id}`} className="text-lg font-semibold text-cyber-light hover:text-cyber-orange transition-colors block mb-2">
              {novel.title}
            </Link>
            <div className="text-sm text-cyber-gray mb-3">
              作者: <Link to={`/user/${novel.author}`} className="text-cyber-pink hover:text-cyber-pink/80">{novel.author}</Link>
            </div>
            <p className="text-cyber-gray mb-3 line-clamp-2">
              {novel.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {novel.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNovels;