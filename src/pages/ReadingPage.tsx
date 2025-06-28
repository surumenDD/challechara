import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, List, Star, Bookmark, MessageSquare, Share2, CheckCircle2 } from 'lucide-react';

const ReadingPage: React.FC = () => {
  const { bookId, episodeId } = useParams();

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Breadcrumb */}
      <div className="bg-cyber-darker/30 border-b border-cyber-blue/20">
        <div className="max-w-3xl mx-auto px-4 py-2">
          <nav className="text-sm text-cyber-gray">
            <Link to="/" className="hover:text-cyber-blue transition-colors">TOP</Link>
            <span className="mx-2">›</span>
            <Link to={`/book/${bookId}`} className="hover:text-cyber-blue transition-colors">サイバーパンク・ラプソディ</Link>
            <span className="mx-2">›</span>
            <Link to={`/book/${bookId}`} className="hover:text-cyber-blue transition-colors">目次</Link>
            <span className="mx-2">›</span>
            <span className="text-cyber-light">第1話　ネオン街の出会い</span>
          </nav>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-cyber-darker/50 border-b border-cyber-blue/20">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-4">
            <button className="flex items-center gap-2 text-cyber-gray hover:text-cyber-blue transition-colors">
              <ChevronLeft className="w-4 h-4" />
              前へ
            </button>
            <Link to={`/book/${bookId}`} className="flex items-center gap-2 text-cyber-gray hover:text-cyber-blue transition-colors">
              <List className="w-4 h-4" />
              目次
            </Link>
            <button className="flex items-center gap-2 text-cyber-gray hover:text-cyber-blue transition-colors">
              次へ
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Read Status Notification */}
      <div className="bg-cyber-green/10 border-b border-cyber-green/20">
        <div className="max-w-3xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-2 text-sm text-cyber-green">
            <CheckCircle2 className="w-4 h-4" />
            <span>この話を既読にマークしました</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Episode title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-cyber-light mb-2">
            第1話　ネオン街の出会い
          </h1>
          <div className="text-sm text-cyber-gray">
            2025/01/15 12:00 掲載
          </div>
        </div>

        {/* Main content */}
        <div className="bg-cyber-darker/30 border border-cyber-blue/20 rounded-lg p-8 mb-8">
          <div className="prose prose-invert max-w-none">
            <div className="text-cyber-light leading-relaxed space-y-6" style={{ lineHeight: '1.8' }}>
              <p>
                夜の東京は、まるで電子回路のように光っていた。摩天楼の間を縫って走るネオンサインが、雨に濡れたアスファルトに虹色の反射を作り出している。2087年の東京は、昔の人々が想像した未来そのものだった。
              </p>
              
              <p>
                リュウは雑踏の中を歩いていた。黒いトレンチコートに身を包み、サイバーゴーグルを額に押し上げた彼の姿は、この街では珍しくもない。誰もが何らかのサイバー機器を身に着け、現実と仮想の境界を行き来している。
              </p>

              <div className="text-center my-8 text-cyber-gray">
                ＊　＊　＊
              </div>

              <p>
                「また、あの夢を見た」
              </p>

              <p>
                リュウは小さくつぶやいた。記憶の断片が、夢の中で踊り続けている。顔の見えない人影、聞き覚えのある声、そして―――血の匂い。
              </p>

              <p>
                三年前に記憶を失って以来、彼は自分が何者なのかわからずにいた。唯一確かなのは、自分がハッカーとしての技術を持っているということだけ。それが生きる術であり、同時に呪いでもあった。
              </p>

              <p>
                「リュウ！」
              </p>

              <p>
                背後から聞こえた声に振り返ると、そこには見知らぬ少女が立っていた。銀色の髪に紫の瞳、そして左のこめかみには小さなサイバーポートが光っている。
              </p>

              <p>
                「君は…誰だ？」
              </p>

              <p>
                少女は微笑んだ。その笑顔に、なぜか懐かしさを感じる。
              </p>

              <p>
                「私はアヤ。あなたを探していたの、リュウ」
              </p>

              <p>
                雨が強くなってきた。ネオンの光がより一層激しく瞬き、街全体が脈動しているかのように見える。
              </p>

              <p>
                「私を探していた？なぜ…」
              </p>

              <p>
                アヤは首を振った。
              </p>

              <p>
                「ここでは話せない。ついてきて」
              </p>

              <p>
                彼女は踵を返すと、雑踏の中へと歩いていく。リュウは一瞬躊躇したが、この出会いが偶然ではないことを直感していた。失われた記憶の鍵を、この少女が握っているのかもしれない。
              </p>

              <div className="text-center my-8 text-cyber-gray">
                ＊　＊　＊
              </div>

              <p>
                二人は裏通りの小さなバーに入った。店内は薄暗く、カウンターの向こうでバーテンダーがグラスを磨いている。客はほとんどいない。
              </p>

              <p>
                「ここなら安全よ」とアヤは言った。「このマスターは、私たちの味方だから」
              </p>

              <p>
                「私たち？」
              </p>

              <p>
                アヤは深いため息をついた。
              </p>

              <p>
                「リュウ、あなたは本当に何も覚えていないのね。三年前のあの日のことも、私たちが一緒にいたことも…」
              </p>

              <p>
                リュウの心臓が早鐘を打った。この少女は、自分の過去を知っている。
              </p>

              <p>
                「教えてくれ」彼は声を絞り出した。「俺は何者なんだ？」
              </p>

              <p>
                アヤは悲しそうな表情を浮かべた。
              </p>

              <p>
                「あなたは…企業の秘密を知りすぎた人。だから記憶を消されたの」
              </p>

              <p>
                雷鳴が響いた。まるで物語の幕開けを告げるかのように。
              </p>
            </div>
          </div>
        </div>

        {/* Navigation (bottom) */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button className="flex items-center gap-2 text-cyber-gray hover:text-cyber-blue transition-colors">
            <ChevronLeft className="w-4 h-4" />
            前へ
          </button>
          <Link to={`/book/${bookId}`} className="flex items-center gap-2 text-cyber-gray hover:text-cyber-blue transition-colors">
            <List className="w-4 h-4" />
            目次
          </Link>
          <button className="flex items-center gap-2 text-cyber-gray hover:text-cyber-blue transition-colors">
            次へ
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="flex items-center gap-2 bg-cyber-orange/20 text-cyber-orange border border-cyber-orange/30 px-4 py-2 rounded-lg hover:bg-cyber-orange/30 transition-colors">
            <Star className="w-4 h-4" />
            評価する
          </button>
          <button className="flex items-center gap-2 bg-cyber-green/20 text-cyber-green border border-cyber-green/30 px-4 py-2 rounded-lg hover:bg-cyber-green/30 transition-colors">
            <Bookmark className="w-4 h-4" />
            ブックマーク
          </button>
          <button className="flex items-center gap-2 bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30 px-4 py-2 rounded-lg hover:bg-cyber-blue/30 transition-colors">
            <Share2 className="w-4 h-4" />
            シェア
          </button>
        </div>

        {/* Comment form */}
        <div className="bg-cyber-darker/50 border border-cyber-blue/30 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-cyber-pink mb-4">感想を書く</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-cyber-gray mb-2">評価</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="text-cyber-gray hover:text-cyber-orange transition-colors">
                    <Star className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm text-cyber-gray mb-2">感想（400文字以内）</label>
              <textarea
                className="w-full bg-cyber-dark border border-cyber-blue/30 rounded-lg p-3 text-cyber-light placeholder-cyber-gray focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-colors"
                rows={4}
                placeholder="この話の感想を書いてください..."
              />
            </div>
            <button className="bg-gradient-to-r from-cyber-pink to-cyber-orange text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-pink/25 transition-all">
              感想を投稿
            </button>
          </div>
        </div>

        {/* Comments */}
        <div className="bg-cyber-darker/30 border border-cyber-blue/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-cyber-green mb-4">感想一覧</h3>
          <div className="space-y-4">
            <div className="p-4 bg-cyber-dark/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'text-cyber-orange fill-cyber-orange' : 'text-cyber-gray'}`} />
                  ))}
                </div>
                <span className="text-cyber-pink text-sm">CyberReader123</span>
                <span className="text-cyber-gray text-xs">1時間前</span>
              </div>
              <p className="text-cyber-gray text-sm">
                素晴らしい導入部でした！リュウとアヤの関係が気になります。記憶を失ったハッカーという設定も新鮮で、続きが楽しみです。
              </p>
            </div>
            <div className="p-4 bg-cyber-dark/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-4 h-4 ${star <= 5 ? 'text-cyber-orange fill-cyber-orange' : 'text-cyber-gray'}`} />
                  ))}
                </div>
                <span className="text-cyber-pink text-sm">NeonFan</span>
                <span className="text-cyber-gray text-xs">3時間前</span>
              </div>
              <p className="text-cyber-gray text-sm">
                サイバーパンクの世界観が丁寧に描かれていて素晴らしいです。雨のネオン街の描写が特に印象的でした。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage;