import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; // 作成したルーティングファイルをインポート
import Layout from './components/Layout'; // あなたのレイアウトコンポーネントをインポート

const App: React.FC = () => {
  return (
    <Router>
      <Layout> {/* ヘッダー、フッターなどを含む共通レイアウト */}
        <AppRoutes /> {/* ここでルーティングが管理されます */}
      </Layout>
    </Router>
  );
};

export default App;