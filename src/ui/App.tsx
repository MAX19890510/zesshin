import React, { useMemo, useState } from 'react'
import { Questionnaire } from '@components/Questionnaire'
import { ResultView } from '@components/ResultView'
import { computeProfile } from '@lib/scoring'
import type { AnswerMap } from '@lib/types'

export const App: React.FC = () => {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'result'>('welcome')
  const [answers, setAnswers] = useState<AnswerMap>({})

  const result = useMemo(() => {
    if (step !== 'result') return null
    return computeProfile(answers)
  }, [answers, step])

  return (
    <div className="container">
      <header className="header">
        <h1>舌診・体質チェック（MVP）</h1>
        <p className="subtitle">10問の質問に答えて体質傾向と生活アドバイスを確認しましょう（医療行為ではありません）。</p>
      </header>

      {step === 'welcome' && (
        <main className="card">
          <h2>はじめに</h2>
          <ol className="list">
            <li>設問は全10問、所要時間は約2分です。</li>
            <li>結果は一般的な傾向の参考情報です。医療行為ではありません。</li>
            <li>プライバシー配慮のためデータは端末内で処理されます。</li>
          </ol>
          <button className="button primary" onClick={() => setStep('quiz')}>開始する</button>
        </main>
      )}

      {step === 'quiz' && (
        <Questionnaire
          onCancel={() => setStep('welcome')}
          onSubmit={(a) => { setAnswers(a); setStep('result') }}
        />
      )}

      {step === 'result' && result && (
        <ResultView
          result={result}
          onRestart={() => { setAnswers({}); setStep('welcome') }}
        />
      )}

      <footer className="footer">
        <small>© 2025 Tongue Wellness. 本ツールは医療行為ではなく、健康管理の参考情報です。</small>
      </footer>
    </div>
  )
}
