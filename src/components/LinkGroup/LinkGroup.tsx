// LinkGroup.tsx
import React from 'react';
import SingleLink from '../SingleLink/SingleLink';

// SingleLinkPropsを再利用して、links配列の型を定義
interface LinkItem {
  hoverColor: 'cyber-blue' | 'cyber-pink' | 'cyber-green' | 'cyber-orange' | string;
  to: string;
  title: string;
}

interface LinkGroupProps {
  /**
   * グループのタイトル
   */
  groupName: string;
  /**
   * グループタイトルのテキスト色 (例: 'cyber-blue')。Tailwind CSSのカラー名と対応させます。
   */
  groupColor: 'cyber-blue' | 'cyber-pink' | 'cyber-green' | 'cyber-orange' | string;
  /**
   * リンク情報の配列。各要素は SingleLinkProps の形式
   */
  links: LinkItem[];
}

/**
 * 複数のリンクをまとめるコンポーネント
 */
const LinkGroup: React.FC<LinkGroupProps> = ({ groupName, groupColor, links }) => {
  // Tailwind CSSのクラス名に変換 (例: 'cyber-blue' -> 'text-cyber-blue')
  const titleClass = groupColor ? `text-${groupColor}` : '';

  return (
    <div>
      <h3 className={`font-semibold mb-4 ${titleClass}`}>{groupName}</h3>
      <ul className="space-y-2 text-sm text-cyber-gray">
        {links.map((link, index) => (
          <SingleLink
            key={link.to || index} // toがユニークであればtoをkeyに、なければindexをフォールバック
            hoverColor={link.hoverColor}
            to={link.to}
            title={link.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default LinkGroup;