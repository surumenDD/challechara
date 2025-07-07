// SingleLink.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface SingleLinkProps {
  /**
   * ホバー時のテキスト色 (例: 'cyber-blue')。Tailwind CSSのカラー名と対応させます。
   */
  hoverColor: 'cyber-blue' | 'cyber-pink' | 'cyber-green' | 'cyber-orange' | string;
  /**
   * リンク先のパス
   */
  to: string;
  /**
   * リンクの表示タイトル
   */
  title: string;
}

/**
 * 個別のリンクを表示するコンポーネント
 */
const SingleLink: React.FC<SingleLinkProps> = ({ hoverColor, to, title }) => {
  // Tailwind CSSのクラス名に変換 (例: 'cyber-blue' -> 'hover:text-cyber-blue')
  const hoverClass = hoverColor ? `hover:text-${hoverColor}` : '';

  return (
    <div>
      <Link to={to} className={`transition-colors ${hoverClass}`}>
        {title}
      </Link>
    </div>
  );
};

export default SingleLink;