import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Save, Eye, FileText, MoreVertical, Upload, Type, Image, SeparatorVertical as Separator, Heading1, Heading2, Heading3, RotateCcw, X, Bot, Send, HelpCircle, Minimize2 } from 'lucide-react';

const BookEditPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [preface, setPreface] = useState('');
  const [afterword, setAfterword] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-4');

  const toolbarIcons = [
    { icon: Type, label: 'ルビ', action: () => {} },
    { icon: Image, label: '挿絵', action: () => {} },
    { icon: Separator, label: '改ページ', action: () => {} },
    { icon: Heading1, label: '見出し大', action: () => {} },
    { icon: Heading2, label: '見出し中', action: () => {} },
    { icon: Heading3, label: '見出し小', action: () => {} },
    { icon: X, label: '取消し', action: () => {} },
    { icon: RotateCcw, label: 'リセット', action: () => {} },
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Here would be the actual chat functionality
      setChatMessage('');
    }
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    if (isHelpOpen) setIsHelpOpen(false);
  };

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Breadcrumb */}
      <div className="bg-cyber-darker/30 border-b border-cyber-blue/20">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="text-sm text-cyber-gray">
            <Link to="/create" className="hover:text-cyber-blue transition-colors">作品の作成・編集</Link>
            <span className="mx-2">›</span>
            <Link to="/mypage" className="hover:text-cyber-blue transition-colors">作品詳細</Link>
            <span className="mx-2">›</span>
            <span className="text-cyber-light">新規エピソード作成</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Work title */}
        <div className="mb-6">
          <Link to="/mypage" className="text-xl text-cyber-blue hover:text-cyber-blue/80 transition-colors">
            サイバーパンク・ラプソディ
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 text-cyber-gray hover:text-cyber-blue border border-cyber-blue/30 px-3 py-2 rounded transition-colors">
                    <FileText className="w-4 h-4" />
                    フリーメモ
                  </button>
                  <button className="flex items-center gap-2 text-cyber-gray hover:text-cyber-blue border border-cyber-blue/30 px-3 py-2 rounded transition-colors">
                    <Eye className="w-4 h-4" />
                    プレビュー
                  </button>
                  <button className="flex items-center gap-2 bg-cyber-blue text-white px-4 py-2 rounded hover:bg-cyber-blue/80 transition-colors">
                    <Save className="w-4 h-4" />
                    下書き保存
                  </button>
                </div>
                <button className="text-cyber-gray hover:text-cyber-blue">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              {/* Episode Title */}
              <div className="mb-6">
                <label className="block text-cyber-light font-semibold mb-2">
                  エピソードタイトル <span className="text-cyber-pink text-sm">必須</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-cyber-dark border-2 border-cyber-blue/30 rounded-lg px-4 py-3 text-cyber-light placeholder-cyber-gray focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-colors"
                  placeholder="エピソードのタイトルを入力してください"
                  maxLength={100}
                />
                <div className="text-xs text-cyber-gray mt-1">100文字以内で入力</div>
              </div>

              {/* Main Content */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-cyber-light font-semibold">
                    本文 <span className="text-cyber-pink text-sm">必須</span>
                  </label>
                  <Link to="/help/input" className="text-cyber-blue hover:text-cyber-blue/80 text-xs transition-colors">
                    入力補助メニューを開く
                  </Link>
                </div>

                {/* WYSIWYG Toolbar */}
                <div className="bg-cyber-dark/50 border border-cyber-blue/30 rounded-t-lg p-3 flex items-center gap-2">
                  <select className="bg-cyber-dark border border-cyber-blue/30 rounded px-2 py-1 text-cyber-light text-sm">
                    <option>一括変換</option>
                    <option>記法挿入</option>
                  </select>
                  <div className="h-4 w-px bg-cyber-blue/30"></div>
                  {toolbarIcons.map((tool, index) => (
                    <button
                      key={index}
                      onClick={tool.action}
                      className="p-2 text-cyber-gray hover:text-cyber-blue hover:bg-cyber-blue/10 rounded transition-colors"
                      title={tool.label}
                    >
                      <tool.icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>

                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-cyber-dark border-2 border-cyber-blue/30 border-t-0 rounded-b-lg px-4 py-3 text-cyber-light placeholder-cyber-gray focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-colors resize-y"
                  rows={20}
                  placeholder="小説の本文を入力してください..."
                />

                <div className="flex items-center justify-between mt-2">
                  <button className="flex items-center gap-2 text-cyber-blue hover:text-cyber-blue/80 text-sm border border-cyber-blue/30 px-3 py-1 rounded transition-colors">
                    <Upload className="w-4 h-4" />
                    テキストファイルを選択(txt形式)
                  </button>
                  <div className="text-xs text-cyber-gray">
                    <div>制限：200〜70,000字</div>
                    <div>現在の文字数：{content.length}字（空白含む）</div>
                  </div>
                </div>
              </div>

              {/* Preface */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-cyber-light font-semibold">前書き</label>
                  <button className="text-cyber-green hover:text-cyber-green/80 text-xs transition-colors">
                    テンプレート挿入
                  </button>
                </div>
                <textarea
                  value={preface}
                  onChange={(e) => setPreface(e.target.value)}
                  className="w-full bg-cyber-dark border-2 border-cyber-blue/30 rounded-lg px-4 py-3 text-cyber-light placeholder-cyber-gray focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-colors"
                  rows={6}
                  placeholder="エピソードの前書きを入力してください..."
                />
              </div>

              {/* Afterword */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-cyber-light font-semibold">後書き</label>
                  <button className="text-cyber-green hover:text-cyber-green/80 text-xs transition-colors">
                    テンプレート挿入
                  </button>
                </div>
                <textarea
                  value={afterword}
                  onChange={(e) => setAfterword(e.target.value)}
                  className="w-full bg-cyber-dark border-2 border-cyber-blue/30 rounded-lg px-4 py-3 text-cyber-light placeholder-cyber-gray focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-colors"
                  rows={6}
                  placeholder="エピソードの後書きを入力してください..."
                />
              </div>

              {/* Illustration Guide */}
              <div className="bg-cyber-green/10 border border-cyber-green/30 rounded-lg p-4 mb-6">
                <p className="text-cyber-green text-sm">
                  みてみんに投稿した画像を挿絵として使用できます。詳しくはヘルプをご確認ください。
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 text-cyber-gray hover:text-cyber-blue border border-cyber-blue/30 px-6 py-3 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                  プレビュー
                </button>
                <button className="flex items-center gap-2 bg-gradient-to-r from-cyber-blue to-cyber-pink text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all">
                  <Save className="w-4 h-4" />
                  下書き保存
                </button>
              </div>
            </div>
          </div>

          {/* AI Floating Button - Positioned between main content and sidebar with sticky positioning */}
          <div className="hidden lg:block fixed left-[75%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
            {!isChatOpen && (
              <button
                onClick={handleChatToggle}
                className="w-16 h-16 bg-gradient-to-br from-cyber-blue/90 to-cyber-green/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-cyber-blue/25 transition-all duration-300 hover:scale-110 border border-cyber-blue/30 group"
                title="AI執筆アシスタント"
              >
                <Bot className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </button>
            )}
          </div>

          {/* AI Chat Assistant - Mobile Overlay */}
          {isChatOpen && (
            <div className="lg:hidden fixed inset-0 bg-cyber-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-cyber-darker border border-cyber-blue/30 rounded-lg w-full max-w-md max-h-[80vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-cyber-blue/30">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-cyber-blue">AI執筆アシスタント</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsHelpOpen(!isHelpOpen)}
                      className="p-1 text-cyber-gray hover:text-cyber-blue transition-colors"
                      title="ヘルプ"
                    >
                      <HelpCircle className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleChatToggle}
                      className="p-1 text-cyber-gray hover:text-cyber-blue transition-colors"
                      title="閉じる"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Help Panel */}
                {isHelpOpen && (
                  <div className="p-4 border-b border-cyber-blue/20">
                    <div className="bg-cyber-dark/30 border border-cyber-blue/20 rounded-lg p-3 text-sm">
                      <h4 className="text-cyber-blue font-semibold mb-2">AIアシスタントの使い方</h4>
                      <ul className="text-cyber-gray space-y-1 text-xs">
                        <li>• 「この表現は適切？」- 文章の校正・推敲</li>
                        <li>• 「キャラクター名の設定は？」- 登場人物情報</li>
                        <li>• 「もっと良い表現は？」- 類義語・表現提案</li>
                        <li>• 「第○話の内容まとめて」- 過去話の要約</li>
                        <li>• 「この単語の意味は？」- 辞書機能</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Chat Area */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-0">
                  {/* AI Message */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                      <p className="text-cyber-light text-sm">
                        ご執筆お疲れ様です。何かお手伝いできることはありますか？
                      </p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-cyber-pink/10 border border-cyber-pink/30 rounded-lg rounded-tr-none px-3 py-2 max-w-[80%]">
                      <p className="text-cyber-light text-sm">
                        登場人物の「アキラ」の過去の設定を、箇条書きでまとめてほしい。
                      </p>
                    </div>
                    <div className="w-6 h-6 bg-cyber-pink/20 border border-cyber-pink/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-cyber-pink text-xs font-bold">U</span>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                      <p className="text-cyber-light text-sm">
                        アキラの設定（第1-3話より）：<br />
                        • 年齢：28歳<br />
                        • 職業：元企業エンジニア<br />
                        • 特技：ハッキング技術<br />
                        • 過去：記憶を一部消去されている<br />
                        • 性格：冷静だが仲間思い
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-cyber-blue/20 space-y-2">
                  <div className="flex items-center gap-2">
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="bg-cyber-dark border border-cyber-blue/30 rounded px-2 py-1 text-cyber-light text-xs"
                    >
                      <option value="gpt-4">GPT-4</option>
                      <option value="gpt-3.5">GPT-3.5</option>
                      <option value="claude">Claude</option>
                    </select>
                    <span className="text-cyber-gray text-xs">モデル</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1 bg-cyber-dark border border-cyber-blue/30 rounded-lg px-3 py-2 text-cyber-light placeholder-cyber-gray focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-colors text-sm"
                      placeholder="AIへの質問や指示を入力..."
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-cyber-blue to-cyber-green text-white p-2 rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar */}
          <div className="space-y-6 relative">
            {/* Author Menu */}
            <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cyber-blue mb-4">投稿</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/create" className="text-cyber-light hover:text-cyber-blue transition-colors text-sm">
                    作品の作成・編集
                  </Link>
                </li>
                <li>
                  <Link to="/series" className="text-cyber-light hover:text-cyber-blue transition-colors text-sm">
                    シリーズ設定
                  </Link>
                </li>
                <li>
                  <Link to="/initial-settings" className="text-cyber-light hover:text-cyber-blue transition-colors text-sm">
                    作品初期設定
                  </Link>
                </li>
                <li>
                  <Link to="/backup" className="text-cyber-light hover:text-cyber-blue transition-colors text-sm">
                    執筆バックアップ
                  </Link>
                </li>
              </ul>
            </div>

            {/* AI Chat Assistant - Desktop */}
            {isChatOpen && (
              <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6 animate-in slide-in-from-right-5 duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-full flex items-center justify-center shadow-lg">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-cyber-blue">AI執筆アシスタント</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsHelpOpen(!isHelpOpen)}
                      className="p-1 text-cyber-gray hover:text-cyber-blue transition-colors"
                      title="ヘルプ"
                    >
                      <HelpCircle className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleChatToggle}
                      className="p-1 text-cyber-gray hover:text-cyber-blue transition-colors"
                      title="閉じる"
                    >
                      <Minimize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Help Panel */}
                {isHelpOpen && (
                  <div className="bg-cyber-dark/30 border border-cyber-blue/20 rounded-lg p-4 mb-4 text-sm">
                    <h4 className="text-cyber-blue font-semibold mb-2">AIアシスタントの使い方</h4>
                    <ul className="text-cyber-gray space-y-1 text-xs">
                      <li>• 「この表現は適切？」- 文章の校正・推敲</li>
                      <li>• 「キャラクター名の設定は？」- 登場人物情報</li>
                      <li>• 「もっと良い表現は？」- 類義語・表現提案</li>
                      <li>• 「第○話の内容まとめて」- 過去話の要約</li>
                      <li>• 「この単語の意味は？」- 辞書機能</li>
                    </ul>
                  </div>
                )}

                {/* Chat Area */}
                <div className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-lg p-4 h-64 overflow-y-auto mb-4 space-y-3">
                  {/* AI Message */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                      <p className="text-cyber-light text-sm">
                        ご執筆お疲れ様です。何かお手伝いできることはありますか？
                      </p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-cyber-pink/10 border border-cyber-pink/30 rounded-lg rounded-tr-none px-3 py-2 max-w-[80%]">
                      <p className="text-cyber-light text-sm">
                        登場人物の「アキラ」の過去の設定を、箇条書きでまとめてほしい。
                      </p>
                    </div>
                    <div className="w-6 h-6 bg-cyber-pink/20 border border-cyber-pink/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-cyber-pink text-xs font-bold">U</span>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                      <p className="text-cyber-light text-sm">
                        アキラの設定（第1-3話より）：<br />
                        • 年齢：28歳<br />
                        • 職業：元企業エンジニア<br />
                        • 特技：ハッキング技術<br />
                        • 過去：記憶を一部消去されている<br />
                        • 性格：冷静だが仲間思い
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="bg-cyber-dark border border-cyber-blue/30 rounded px-2 py-1 text-cyber-light text-xs"
                    >
                      <option value="gpt-4">GPT-4</option>
                      <option value="gpt-3.5">GPT-3.5</option>
                      <option value="claude">Claude</option>
                    </select>
                    <span className="text-cyber-gray text-xs">モデル</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1 bg-cyber-dark border border-cyber-blue/30 rounded-lg px-3 py-2 text-cyber-light placeholder-cyber-gray focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-colors text-sm"
                      placeholder="AIへの質問や指示を入力..."
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-cyber-blue to-cyber-green text-white p-2 rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile AI Floating Button */}
            <div className="lg:hidden fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
              {!isChatOpen && (
                <button
                  onClick={handleChatToggle}
                  className="w-14 h-14 bg-gradient-to-br from-cyber-blue/90 to-cyber-green/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-cyber-blue/25 transition-all duration-300 hover:scale-110 border border-cyber-blue/30 group"
                  title="AI執筆アシスタント"
                >
                  <Bot className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
              )}
            </div>

            {/* Writing Tips */}
            <div className="bg-gradient-to-br from-cyber-orange/20 to-cyber-pink/20 border border-cyber-orange/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cyber-orange mb-4">執筆のコツ</h3>
              <ul className="text-sm text-cyber-gray space-y-2">
                <li>• 読者を引き込む冒頭を心がけましょう</li>
                <li>• キャラクターの心情を描写しましょう</li>
                <li>• 適度な改行で読みやすくしましょう</li>
                <li>• タグは作品の内容に合ったものを</li>
              </ul>
            </div>

            {/* Shortcuts */}
            <div className="bg-cyber-darker/30 border border-cyber-blue/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cyber-blue mb-4">ショートカット</h3>
              <div className="text-sm text-cyber-gray space-y-2">
                <div className="flex justify-between">
                  <span>保存:</span>
                  <span className="text-cyber-light">Ctrl + S</span>
                </div>
                <div className="flex justify-between">
                  <span>プレビュー:</span>
                  <span className="text-cyber-light">Ctrl + P</span>
                </div>
                <div className="flex justify-between">
                  <span>ルビ:</span>
                  <span className="text-cyber-light">Ctrl + R</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookEditPage;