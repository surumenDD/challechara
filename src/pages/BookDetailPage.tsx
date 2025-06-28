import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen, User, Clock, Eye, Heart, Star, MessageCircle, Share2, Bookmark, Bot, ChevronDown, CheckCircle2, Circle } from 'lucide-react';

const BookDetailPage: React.FC = () => {
  const { id } = useParams();
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [summaryRange, setSummaryRange] = useState({ from: 1, to: 3 });
  const [isGenerating, setIsGenerating] = useState(false);
  const [summaryResult, setSummaryResult] = useState('');

  const episodes = [
    { id: 1, title: '第1話　ネオン街の出会い', publishedAt: '2025/01/15 12:00', chapter: '序章', isRead: true },
    { id: 2, title: '第2話　電脳空間への侵入', publishedAt: '2025/01/16 12:00', chapter: '序章', isRead: true },
    { id: 3, title: '第3話　記憶の断片', publishedAt: '2025/01/17 12:00', chapter: '序章', isRead: true },
    { id: 4, title: '第4話　企業の陰謀', publishedAt: '2025/01/18 12:00', chapter: '第一章', isRead: false },
    { id: 5, title: '第5話　仲間との出会い', publishedAt: '2025/01/19 12:00', chapter: '第一章', isRead: false },
  ];

  const groupedEpisodes = episodes.reduce((acc, episode) => {
    if (!acc[episode.chapter]) {
      acc[episode.chapter] = [];
    }
    acc[episode.chapter].push(episode);
    return acc;
  }, {} as Record<string, typeof episodes>);

  const lastReadEpisode = episodes.filter(ep => ep.isRead).pop();
  const hasReadEpisodes = episodes.some(ep => ep.isRead);

  const handleGenerateSummary = () => {
    setIsGenerating(true);
    setSummaryResult('');
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false);
      setSummaryResult(`第1話から第3話までの要約：

2087年の東京で記憶を失ったハッカー「リュウ」が主人公。彼は自分の正体がわからないまま、電脳空間でのハッキングで生計を立てている。

ある夜、謎の少女「アヤ」と出会う。アヤはリュウの名前を知っており、彼を探していたと告白。二人は裏通りのバーで話し、アヤはリュウが企業の秘密を知りすぎたために記憶を消されたことを明かす。

リュウの失われた記憶には巨大な陰謀が隠されており、企業の暗部に関わる重要な情報が含まれている可能性が示唆される。物語は記憶の謎と企業陰謀の解明に向けて動き始める。`);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Navigation tabs */}
      <div className="bg-cyber-darker border-b border-cyber-blue/30">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8">
            <Link to={`/book/${id}`} className="py-3 border-b-2 border-cyber-blue text-cyber-blue font-semibold">
              TOP
            </Link>
            <Link to={`/book/${id}/info`} className="py-3 text-cyber-gray hover:text-cyber-light transition-colors">
              小説情報
            </Link>
            <Link to={`/book/${id}/reviews`} className="py-3 text-cyber-gray hover:text-cyber-light transition-colors">
              感想
            </Link>
            <Link to={`/book/${id}/reviews-detailed`} className="py-3 text-cyber-gray hover:text-cyber-light transition-colors">
              レビュー
            </Link>
            <Link to={`/book/${id}/stats`} className="py-3 text-cyber-gray hover:text-cyber-light transition-colors">
              スコアカード
            </Link>
          </nav>
        </div>
      </div>

      {/* Status info */}
      <div className="bg-cyber-darker/30 border-b border-cyber-blue/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center gap-4 text-sm text-cyber-gray">
            <span className="bg-cyber-blue/20 text-cyber-blue px-2 py-1 rounded">連載中</span>
            <span>毎日更新予定</span>
            <span className="text-cyber-orange">※一部に暴力的な表現が含まれます</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title and Author */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-cyber-light mb-4">
            サイバーパンク・ラプソディ
          </h1>
          <div className="text-cyber-gray">
            作者: <Link to="/user/NeonWriter" className="text-cyber-pink hover:text-cyber-pink/80 transition-colors">NeonWriter</Link>
          </div>
        </div>

        {/* Synopsis and AI Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Synopsis */}
          <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-cyber-blue mb-4">あらすじ</h2>
            <div className="text-cyber-gray leading-relaxed space-y-4">
              <p>
                2087年、東京。巨大企業が支配するネオン輝く未来都市で、一人のハッカー「リュウ」が生きていた。
                彼は記憶を失い、自分が何者なのかわからないまま、日々を電脳空間でのハッキングで糊口を凌いでいる。
              </p>
              <p>
                ある日、謎の少女「アヤ」と出会ったリュウは、自分の過去に隠された巨大な陰謀に巻き込まれていく。
                企業の秘密、消された記憶、そして失われた愛。すべての真実が明らかになる時、彼は何を選択するのか？
              </p>
              <p>
                サイバーパンクの世界を舞台に描く、愛と復讐の物語。
              </p>
            </div>
          </div>

          {/* AI Summary */}
          <div className="bg-cyber-darker/50 border border-cyber-green/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-cyber-green mb-4 flex items-center gap-2">
              <Bot className="w-5 h-5" />
              これまでの話を要約する
            </h2>
            
            {hasReadEpisodes ? (
              <div className="space-y-4">
                {/* Controls Section - Compact */}
                <div className="bg-cyber-dark/30 border border-cyber-green/20 rounded-lg p-3 space-y-3">
                  {/* AI Model Selection - Compact */}
                  <div>
                    <label className="block text-xs font-medium text-cyber-light mb-1">
                      AIモデル
                    </label>
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full bg-cyber-dark border border-cyber-green/30 rounded px-2 py-1 text-cyber-light text-sm focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-colors"
                    >
                      <option value="gpt-4">GPT-4</option>
                      <option value="gpt-3.5">GPT-3.5</option>
                      <option value="claude">Claude</option>
                      <option value="gemini">Gemini</option>
                    </select>
                  </div>

                  {/* Episode Range Selection - Compact */}
                  <div>
                    <label className="block text-xs font-medium text-cyber-light mb-1">
                      要約範囲
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={summaryRange.from}
                        onChange={(e) => setSummaryRange({...summaryRange, from: parseInt(e.target.value)})}
                        className="w-full bg-cyber-dark border border-cyber-green/30 rounded px-2 py-1 text-cyber-light text-xs focus:border-cyber-green transition-colors"
                      >
                        {episodes.map((ep) => (
                          <option key={ep.id} value={ep.id}>第{ep.id}話</option>
                        ))}
                      </select>
                      <select
                        value={summaryRange.to}
                        onChange={(e) => setSummaryRange({...summaryRange, to: parseInt(e.target.value)})}
                        className="w-full bg-cyber-dark border border-cyber-green/30 rounded px-2 py-1 text-cyber-light text-xs focus:border-cyber-green transition-colors"
                      >
                        {episodes.map((ep) => (
                          <option key={ep.id} value={ep.id}>第{ep.id}話</option>
                        ))}
                      </select>
                    </div>
                    <div className="text-xs text-cyber-gray mt-1">
                      デフォルト: 最後に読んだ話（第{lastReadEpisode?.id}話）まで
                    </div>
                  </div>

                  {/* Generate Button - Compact */}
                  <button
                    onClick={handleGenerateSummary}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-cyber-green to-cyber-blue text-white px-3 py-2 rounded font-semibold hover:shadow-lg hover:shadow-cyber-green/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        生成中...
                      </>
                    ) : (
                      <>
                        <Bot className="w-3 h-3" />
                        要約生成
                      </>
                    )}
                  </button>
                </div>

                {/* Summary Output Area */}
                <div className="bg-cyber-dark/50 border border-cyber-green/20 rounded-lg p-4 min-h-[200px]">
                  <div className="flex items-center gap-2 mb-3">
                    <Bot className="w-4 h-4 text-cyber-green" />
                    <span className="text-cyber-green text-sm font-medium">AI要約結果</span>
                  </div>
                  
                  {isGenerating ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                        <span className="text-cyber-green text-xs">AI要約生成中...</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-cyber-green/20 rounded animate-pulse"></div>
                        <div className="h-3 bg-cyber-green/20 rounded animate-pulse w-4/5"></div>
                        <div className="h-3 bg-cyber-green/20 rounded animate-pulse w-3/5"></div>
                        <div className="h-3 bg-cyber-green/20 rounded animate-pulse w-4/5"></div>
                        <div className="h-3 bg-cyber-green/20 rounded animate-pulse w-2/3"></div>
                      </div>
                    </div>
                  ) : summaryResult ? (
                    <div className="text-cyber-gray leading-relaxed text-sm whitespace-pre-line">
                      {summaryResult}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-32 text-cyber-gray/60">
                      <Bot className="w-8 h-8 mb-2 opacity-50" />
                      <p className="text-sm">ここにAI要約が表示されます</p>
                      <p className="text-xs mt-1">上のボタンを押して要約を生成してください</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Bot className="w-12 h-12 text-cyber-gray mx-auto mb-4 opacity-50" />
                <p className="text-cyber-gray">まだ既読が一つもありません</p>
                <p className="text-cyber-gray text-sm mt-2">
                  エピソードを読むと、AI要約機能が利用できるようになります
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="flex items-center gap-2 bg-cyber-green/20 text-cyber-green border border-cyber-green/30 px-4 py-2 rounded-lg hover:bg-cyber-green/30 transition-colors">
            <Bookmark className="w-4 h-4" />
            ブックマークに登録
          </button>
          <button className="flex items-center gap-2 bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/30 px-4 py-2 rounded-lg hover:bg-cyber-pink/30 transition-colors">
            <Heart className="w-4 h-4" />
            お気に入り
          </button>
          <button className="flex items-center gap-2 bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30 px-4 py-2 rounded-lg hover:bg-cyber-blue/30 transition-colors">
            <Share2 className="w-4 h-4" />
            シェア
          </button>
        </div>

        {/* Table of Contents */}
        <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-cyber-blue mb-6">目次</h2>
          
          <div className="space-y-6">
            {Object.entries(groupedEpisodes).map(([chapter, chapterEpisodes]) => (
              <div key={chapter}>
                <h3 className="text-lg font-semibold text-cyber-orange mb-3 pb-2 border-b border-cyber-orange/30">
                  {chapter}
                </h3>
                <div className="space-y-2">
                  {chapterEpisodes.map((episode) => (
                    <div key={episode.id} className="flex items-center justify-between p-3 bg-cyber-dark/30 rounded-lg hover:bg-cyber-blue/5 transition-colors group">
                      <div className="flex items-center gap-3 flex-1">
                        {/* Read Status Icon */}
                        {episode.isRead ? (
                          <CheckCircle2 className="w-5 h-5 text-cyber-green flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-cyber-gray flex-shrink-0" />
                        )}
                        <Link to={`/read/${id}/${episode.id}`} className="flex-1 text-cyber-light hover:text-cyber-blue transition-colors group-hover:text-cyber-blue">
                          {episode.title}
                        </Link>
                      </div>
                      <div className="text-sm text-cyber-gray">
                        {episode.publishedAt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 pt-6 border-t border-cyber-blue/20">
            <span className="text-cyber-gray">エピソード数: {episodes.length} 件</span>
            <span className="text-cyber-green ml-4">既読: {episodes.filter(ep => ep.isRead).length} 件</span>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {['サイバーパンク', 'SF', 'アクション', 'ミステリー', '記憶喪失', '企業陰謀', 'ハッカー', '未来都市'].map((tag) => (
              <Link key={tag} to={`/search?tag=${tag}`} className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-sm rounded hover:bg-cyber-blue/30 transition-colors">
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Comments preview */}
        <div className="mt-8 bg-cyber-darker/30 border border-cyber-blue/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-cyber-green mb-4">最新の感想</h3>
          <div className="space-y-4">
            <div className="p-3 bg-cyber-dark/30 rounded">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-cyber-pink" />
                <span className="text-cyber-pink text-sm">CyberReader123</span>
                <span className="text-cyber-gray text-xs">2時間前</span>
              </div>
              <p className="text-cyber-gray text-sm">
                毎回更新が楽しみです！リュウとアヤの関係がどうなっていくのか気になります。
              </p>
            </div>
            <div className="p-3 bg-cyber-dark/30 rounded">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-cyber-pink" />
                <span className="text-cyber-pink text-sm">FutureNinja</span>
                <span className="text-cyber-gray text-xs">5時間前</span>
              </div>
              <p className="text-cyber-gray text-sm">
                世界観の描写が素晴らしい。本当にサイバーパンクの世界に入り込んだような気分になります。
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to={`/book/${id}/reviews`} className="text-cyber-blue hover:text-cyber-blue/80 text-sm transition-colors">
              感想をもっと見る →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;