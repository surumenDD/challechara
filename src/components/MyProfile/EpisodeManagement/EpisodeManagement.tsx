import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  status: 'published' | 'draft'; // 投稿済 or 下書き
  lastUpdated: string; // YYYY/MM/DD HH:mm
}

interface EpisodeManagementProps {
  publishedEpisodes: Episode[];
  draftEpisodes: Episode[];
  bookId: number; // どの作品のエピソードかを示すID
}

const EpisodeManagement: React.FC<EpisodeManagementProps> = ({ publishedEpisodes, draftEpisodes, bookId }) => {
  const [activeTab, setActiveTab] = useState<'published' | 'draft'>('published');

  const displayEpisodes = activeTab === 'published' ? publishedEpisodes : draftEpisodes;

  return (
    <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg">
      <div className="border-b border-cyber-blue/30">
        <div className="flex">
          <button
            className={`px-6 py-3 border-b-2 ${activeTab === 'published' ? 'border-cyber-blue text-cyber-blue' : 'border-transparent text-cyber-gray hover:text-cyber-light'} font-semibold transition-colors`}
            onClick={() => setActiveTab('published')}
          >
            投稿済 ({publishedEpisodes.length})
          </button>
          <button
            className={`px-6 py-3 border-b-2 ${activeTab === 'draft' ? 'border-cyber-blue text-cyber-blue' : 'border-transparent text-cyber-gray hover:text-cyber-light'} font-semibold transition-colors`}
            onClick={() => setActiveTab('draft')}
          >
            下書き ({draftEpisodes.length})
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-2 text-cyber-blue hover:text-cyber-blue/80 text-sm transition-colors border border-cyber-blue/30 px-3 py-1 rounded">
            章を設定
          </button>
          <Link to={`/edit/${bookId}/new`} className="flex items-center gap-2 bg-gradient-to-r from-cyber-blue to-cyber-pink text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all">
            <PlusCircle className="w-4 h-4" />
            新しいエピソード
          </Link>
        </div>

        <div className="space-y-2">
          {displayEpisodes.length === 0 ? (
            <p className="text-cyber-gray text-center py-8">
              {activeTab === 'published' ? '投稿されたエピソードはありません。' : '下書きのエピソードはありません。'}
            </p>
          ) : (
            displayEpisodes.map((episode) => (
              <div key={episode.id} className="flex items-center justify-between p-4 bg-cyber-dark/30 rounded-lg hover:bg-cyber-blue/5 transition-colors group">
                <div className="flex items-center gap-4">
                  <span className="px-2 py-1 bg-cyber-gray/20 text-cyber-gray text-xs rounded border">
                    ep.{episode.id}
                  </span>
                  <Link to={`/read/${bookId}/${episode.id}`} className="text-cyber-light hover:text-cyber-blue transition-colors group-hover:text-cyber-blue">
                    第{episode.id}話　{episode.title}
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-cyber-gray">
                    {episode.lastUpdated}
                  </span>
                  <Link to={`/edit/${bookId}/${episode.id}`} className="text-cyber-pink hover:text-cyber-pink/80 text-sm transition-colors">
                    編集
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EpisodeManagement;