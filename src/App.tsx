import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import ReadingPage from './pages/ReadingPage';
import UserProfilePage from './pages/UserProfilePage';
import MyProfilePage from './pages/MyProfilePage';
import BookEditPage from './pages/BookEditPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/read/:bookId/:episodeId" element={<ReadingPage />} />
          <Route path="/user/:userId" element={<UserProfilePage />} />
          <Route path="/mypage" element={<MyProfilePage />} />
          <Route path="/edit/:bookId?" element={<BookEditPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;