import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-darker border-t border-cyber-blue/30 mt-16">
      {/* Main footer */}
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-cyber-blue font-semibold mb-4">サイト案内</h3>
            <ul className="space-y-2 text-sm text-cyber-gray">
              <li><Link to="/about" className="hover:text-cyber-blue transition-colors">サイトについて</Link></li>
              <li><Link to="/help" className="hover:text-cyber-blue transition-colors">ヘルプ</Link></li>
              <li><Link to="/rules" className="hover:text-cyber-blue transition-colors">利用規約</Link></li>
              <li><Link to="/privacy" className="hover:text-cyber-blue transition-colors">プライバシーポリシー</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyber-pink font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-2 text-sm text-cyber-gray">
              <li><Link to="/contact" className="hover:text-cyber-pink transition-colors">お問い合わせフォーム</Link></li>
              <li><Link to="/feedback" className="hover:text-cyber-pink transition-colors">ご意見・ご要望</Link></li>
              <li><Link to="/bug-report" className="hover:text-cyber-pink transition-colors">不具合報告</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyber-green font-semibold mb-4">グループサイト</h3>
            <ul className="space-y-2 text-sm text-cyber-gray">
              <li><Link to="/novels" className="hover:text-cyber-green transition-colors">小説を読もう！</Link></li>
              <li><Link to="/comics" className="hover:text-cyber-green transition-colors">コミック投稿サイト</Link></li>
              <li><Link to="/games" className="hover:text-cyber-green transition-colors">ゲーム投稿サイト</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyber-orange font-semibold mb-4">フォロー</h3>
            <ul className="space-y-2 text-sm text-cyber-gray">
              <li><Link to="/twitter" className="hover:text-cyber-orange transition-colors">公式Twitter</Link></li>
              <li><Link to="/blog" className="hover:text-cyber-orange transition-colors">公式ブログ</Link></li>
              <li><Link to="/newsletter" className="hover:text-cyber-orange transition-colors">メルマガ登録</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-cyber-blue/10 px-4 py-3">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-cyber-gray">
            © 2025 CyberProject Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;