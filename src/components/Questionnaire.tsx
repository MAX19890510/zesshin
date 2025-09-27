import React, { useMemo, useState } from 'react'
import { QUESTIONS } from '@lib/questions'
import type { AnswerMap } from '@lib/types'

type Props = {
  onCancel: () => void
  onSubmit: (answers: AnswerMap) => void
}

export const Questionnaire: React.FC<Props> = ({ onCancel, onSubmit }) => {
  const [answers, setAnswers] = useState<AnswerMap>({})

  const answeredCount = Object.keys(answers).length
  const total = QUESTIONS.length
  const progress = Math.round((answeredCount / total) * 100)

  const canSubmit = useMemo(() => answeredCount === total, [answeredCount, total])

  return (
    <main className="card">
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <h2>質問に回答してください（{answeredCount}/{total}）</h2>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault()
          if (canSubmit) onSubmit(answers)
        }}
      >
        {QUESTIONS.map((q, idx) => (
          <div key={q.id} className="question">
            <div className="q-head">
              <span className="q-number">Q{idx + 1}</span>
              <span className="q-text">{q.text}</span>
            </div>
            <div className="options">
              {q.options.map(opt => (
                <label key={opt.value} className={`option ${answers[q.id] === opt.value ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name={q.id}
                    value={opt.value}
                    checked={answers[q.id] === opt.value}
                    onChange={() => setAnswers(prev => ({ ...prev, [q.id]: opt.value }))}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="actions">
          <button type="button" className="button" onClick={onCancel}>戻る</button>
          <button type="submit" className="button primary" disabled={!canSubmit}>
            診断する
          </button>
        </div>
      </form>
    </main>
  )
}
