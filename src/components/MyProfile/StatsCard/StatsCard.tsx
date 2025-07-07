import React from 'react';
import { Eye, MessageSquare, BookOpen } from 'lucide-react';

interface StatsCardProps {
  totalViews: string;
  totalComments: string;
  totalBookmarks: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ totalViews, totalComments, totalBookmarks }) => {
  return (
    <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-cyber-green mb-4">統計情報</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-cyber-gray">
            <Eye className="w-4 h-4" />
            総PV数
          </span>
          <span className="text-cyber-light font-semibold">{totalViews}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-cyber-gray">
            <MessageSquare className="w-4 h-4" />
            感想数
          </span>
          <span className="text-cyber-light font-semibold">{totalComments}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-cyber-gray">
            <BookOpen className="w-4 h-4" />
            ブックマーク
          </span>
          <span className="text-cyber-light font-semibold">{totalBookmarks}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;