import { ADVICE_LIBRARY, CATEGORIES, PROFILE_LABEL } from './advice'
import { QUESTIONS } from './questions'
import type { AnswerMap, ComputedResult, ProfileKey, ProfileScore } from './types'

// 回答をプロフィールスコアに集計
export function scoreProfiles(answers: AnswerMap): ProfileScore[] {
  const keys: ProfileKey[] = ['normal','qi_def','blood_def','yin_def','yang_def','phlegm_damp','stagnation','blood_stasis','damp_heat','stomach_heat']
  const totals: Record<ProfileKey, number> = Object.fromEntries(keys.map(k => [k, 0])) as Record<ProfileKey, number>

  for (const q of QUESTIONS) {
    const v = answers[q.id]
    if (v == null) continue
    for (const [k, w] of Object.entries(q.weights)) {
      totals[k as ProfileKey] += v * (w ?? 0)
    }
  }

  // ベースラインが低い場合は"normal"にボーナス（すべて0回答などのケース）
  const sumWithoutNormal = keys.filter(k => k !== 'normal').reduce((acc, k) => acc + totals[k], 0)
  if (sumWithoutNormal < 1) totals.normal = 1

  return keys.map(k => ({ key: k, score: totals[k] }))
}

function summarizeTopProfiles(top: ProfileScore[]): string {
  if (top.length === 0) return '傾向は特に目立ちませんでした。'
  const names = top.map(t => PROFILE_LABEL[t.key]).join('・')
  return `優勢な体質傾向: ${names}`
}

export function computeProfile(answers: AnswerMap): ComputedResult {
  const scores = scoreProfiles(answers)
  // 降順に並べて上位2つを採用（同点は先着）
  const sorted = [...scores].sort((a, b) => b.score - a.score)
  const topScore = sorted[0]?.score ?? 0
  const topProfiles = sorted.filter(s => s.score > 0 && Math.abs(s.score - topScore) < 0.5).slice(0, 2)

  // アドバイスは上位の1〜2プロファイルを合成（単純に最初を優先、2位があれば補足）
  const advice: ComputedResult['advice'] = Object.fromEntries(
    CATEGORIES.map(cat => {
      const primary = ADVICE_LIBRARY[(topProfiles[0]?.key ?? 'normal') as ProfileKey][cat]
      const secondary = topProfiles[1] ? ADVICE_LIBRARY[topProfiles[1].key][cat] : undefined
      const merged = secondary
        ? { title: primary.title, details: Array.from(new Set([...primary.details, ...secondary.details])).slice(0, 6) }
        : primary
      return [cat, merged]
    })
  ) as any

  const summary = summarizeTopProfiles(topProfiles)
  return { scores, topProfiles, summary, advice }
}
