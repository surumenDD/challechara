import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import BookDetailPage from '../pages/BookDetailPage';
import BookEditPage from '../pages/BookEditPage';
import MyProfilePage from '../pages/MyProfilePage';
import ReadingPage from '../pages/ReadingPage';
import UserProfilePage from '../pages/UserProfilePage';
// 必要に応じて他のページもインポートしてください

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book/:id" element={<BookDetailPage />} />
      <Route path="/read/:bookId/:episodeId" element={<ReadingPage />} />
      <Route path="/edit/:bookId?" element={<BookEditPage />} />
      <Route path="/mypage" element={<MyProfilePage />} />
      <Route path="/user/:userId" element={<UserProfilePage />} />
      {/* Sidebar内からリンクされるページも追加します */}
      <Route path="/premium" element={<div>プレミアム会員ページ</div>} /> {/* 仮のコンポーネント */}
      <Route path="/contest" element={<div>執筆コンテストページ</div>} /> {/* 仮のコンポーネント */}
      <Route path="/ranking" element={<div>週間ランキングページ</div>} /> {/* 仮のコンポーネント */}
      {/* 404ページなど、必要に応じて追加 */}
      <Route path="*" element={<div>ページが見つかりません (404)</div>} />
    </Routes>
  );
};

export default AppRoutes;