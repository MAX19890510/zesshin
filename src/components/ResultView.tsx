import React from 'react'
import type { ComputedResult } from '@lib/types'
import { PROFILE_LABEL } from '@lib/advice'

type Props = {
  result: ComputedResult
  onRestart: () => void
}

export const ResultView: React.FC<Props> = ({ result, onRestart }) => {
  const { topProfiles, summary, advice, scores } = result

  return (
    <main className="card">
      <h2>結果</h2>
      <p className="summary">{summary}</p>

      {topProfiles.length > 0 && (
        <div className="tags">
          {topProfiles.map(tp => (
            <span key={tp.key} className="tag">{PROFILE_LABEL[tp.key]}（{tp.score.toFixed(1)}）</span>
          ))}
        </div>
      )}

      <section className="advice">
        <h3>アドバイス</h3>
        <div className="advice-grid">
          {Object.entries(advice).map(([cat, item]) => (
            <div key={cat} className="advice-card">
              <h4>{item.title}</h4>
              <ul>
                {item.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <details className="details">
        <summary>全スコアを見る</summary>
        <ul className="score-list">
          {scores
            .slice()
            .sort((a, b) => b.score - a.score)
            .map(s => (
              <li key={s.key}>{PROFILE_LABEL[s.key]}: {s.score.toFixed(2)}</li>
            ))}
        </ul>
      </details>

      <div className="actions">
        <button className="button" onClick={onRestart}>最初に戻る</button>
        <button className="button primary" onClick={() => window.print()}>結果を保存/印刷</button>
      </div>

      <div className="disclaimer">
        <small>本結果は一般的傾向の参考情報であり、医療行為ではありません。気になる症状がある場合は専門家にご相談ください。</small>
      </div>
    </main>
  )
}
