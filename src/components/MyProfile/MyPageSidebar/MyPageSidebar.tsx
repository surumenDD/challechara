import React from 'react';
import AuthorMenu from '../AuthorMenu/AuthorMenu'; // パスを確認
import StatsCard from '../StatsCard/StatsCard';     // パスを確認
import AdBanner from '../AdBanner/AdBanner';

interface MyPageSidebarProps {
  totalViews: string;
  totalComments: string;
  totalBookmarks: string;
}

const MyPageSidebar: React.FC<MyPageSidebarProps> = ({ totalViews, totalComments, totalBookmarks }) => {
  return (
    <div className="space-y-6">
      <AuthorMenu />
      <StatsCard
        totalViews={totalViews}
        totalComments={totalComments}
        totalBookmarks={totalBookmarks}
      />
      <AdBanner />
    </div>
  );
};

export default MyPageSidebar;