export type QuestionOption = {
  value: number
  label: string
}

export type Question = {
  id: string
  text: string
  options: QuestionOption[]
  // 各プロフィールへの重み付け（valueが選ばれた時の加点 = value * weight）
  weights: Partial<Record<ProfileKey, number>>
}

export type AnswerMap = Record<string, number>

export type ProfileKey =
  | 'normal' // 平和/バランス
  | 'qi_def' // 気虚
  | 'blood_def' // 血虚
  | 'yin_def' // 陰虚
  | 'yang_def' // 陽虚
  | 'phlegm_damp' // 痰湿
  | 'stagnation' // 気滞
  | 'blood_stasis' // 瘀血
  | 'damp_heat' // 湿熱
  | 'stomach_heat' // 胃熱

export type ProfileScore = {
  key: ProfileKey
  score: number
}

export type AdviceCategory = 'diet' | 'sleep' | 'exercise' | 'lifestyle'

export type AdviceItem = {
  title: string
  details: string[]
}

export type AdviceLibrary = Record<ProfileKey, Record<AdviceCategory, AdviceItem>>

export type ComputedResult = {
  scores: ProfileScore[]
  topProfiles: ProfileScore[]
  summary: string
  advice: Record<AdviceCategory, AdviceItem>
}
