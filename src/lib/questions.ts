import type { Question } from './types'

// 0〜3の4択（まったく当てはまらない〜とても当てはまる）を基本とします
const baseOptions = [
  { value: 0, label: 'まったく当てはまらない' },
  { value: 1, label: 'あまり当てはまらない' },
  { value: 2, label: 'やや当てはまる' },
  { value: 3, label: 'とても当てはまる' },
]

export const QUESTIONS: Question[] = [
  {
    id: 'fatigue',
    text: '疲れやすく息切れしやすい、声が小さいと感じる',
    options: baseOptions,
    weights: { qi_def: 1.0 }
  },
  {
    id: 'pale_dizzy',
    text: '顔色が青白い/立ちくらみや動悸がある',
    options: baseOptions,
    weights: { blood_def: 1.0 }
  },
  {
    id: 'dry_mouth',
    text: '口や喉の渇き、夜間のほてりや寝汗が気になる',
    options: baseOptions,
    weights: { yin_def: 1.0 }
  },
  {
    id: 'cold_sensitivity',
    text: '手足の冷え、寒がり、むくみやすい',
    options: baseOptions,
    weights: { yang_def: 1.0, phlegm_damp: 0.5 }
  },
  {
    id: 'heaviness',
    text: '体が重だるい、頭が重い、痰やねばつきが多い',
    options: baseOptions,
    weights: { phlegm_damp: 1.0 }
  },
  {
    id: 'irritability',
    text: 'イライラ・ため息・胸脇の張りを感じやすい',
    options: baseOptions,
    weights: { stagnation: 1.0 }
  },
  {
    id: 'fixed_pain',
    text: '刺すような痛み・シミ/アザができやすい・しびれ',
    options: baseOptions,
    weights: { blood_stasis: 1.0 }
  },
  {
    id: 'greasy_food_heat',
    text: '脂っこい物や辛い物が好き/食べると口苦・口臭・吹き出物',
    options: baseOptions,
    weights: { damp_heat: 1.0, stomach_heat: 0.5 }
  },
  {
    id: 'thirst_constipation',
    text: '口渇・便秘気味・舌が赤く苔が少ない感じ',
    options: baseOptions,
    weights: { stomach_heat: 1.0, yin_def: 0.5 }
  },
  {
    id: 'sleep_quality',
    text: '寝つきが悪い/夢が多い/中途覚醒しやすい',
    options: baseOptions,
    weights: { stagnation: 0.5, yin_def: 0.5, blood_def: 0.5 }
  },
]
