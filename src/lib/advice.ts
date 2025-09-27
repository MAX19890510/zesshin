import type { AdviceCategory, AdviceItem, AdviceLibrary, ProfileKey } from './types'

const makeAdvice = (title: string, details: string[]): AdviceItem => ({ title, details })

export const CATEGORIES: AdviceCategory[] = ['diet', 'sleep', 'exercise', 'lifestyle']

export const PROFILE_LABEL: Record<ProfileKey, string> = {
  normal: 'バランス型',
  qi_def: '気虚',
  blood_def: '血虚',
  yin_def: '陰虚',
  yang_def: '陽虚',
  phlegm_damp: '痰湿',
  stagnation: '気滞',
  blood_stasis: '瘀血',
  damp_heat: '湿熱',
  stomach_heat: '胃熱',
}

export const ADVICE_LIBRARY: AdviceLibrary = {
  normal: {
    diet: makeAdvice('食事（バランス）', [
      '主食・主菜・副菜を意識して過不足のない食事を。',
      '季節の食材を取り入れ、油や糖分は適量に。',
      '水分はこまめに。冷たい飲み物の過剰は控えめに。',
    ]),
    sleep: makeAdvice('睡眠', [
      '就寝・起床時刻を整える（同じリズム）。',
      '寝る90分前の入浴やストレッチでリラックス。',
    ]),
    exercise: makeAdvice('運動', [
      '週3回程度の有酸素運動（速歩20〜30分）。',
      '座位時間が長い場合は1時間ごとに立って伸びる。',
    ]),
    lifestyle: makeAdvice('生活', [
      '深呼吸や瞑想でストレスマネジメント。',
      'デジタルデトックス（就寝1時間前はスクリーン控えめ）。',
    ]),
  },
  qi_def: {
    diet: makeAdvice('食事（気を補う）', [
      '山芋・カボチャ・米・ハチミツ・豆類を適量。',
      '冷たい物・生もの・過食を避け、温かいスープを。',
    ]),
    sleep: makeAdvice('睡眠', [
      '23時までに就寝を目標にし、昼寝は20分以内。',
      '就寝前は呼吸法で副交感神経を優位に。',
    ]),
    exercise: makeAdvice('運動', [
      '軽い有酸素運動から開始し徐々に負荷を。',
      '息切れする運動は当面控え、継続性を優先。',
    ]),
    lifestyle: makeAdvice('生活', [
      '過労を避け、タスクを細分化して無理をしない。',
      '朝日を浴びて体内時計を整える。',
    ]),
  },
  blood_def: {
    diet: makeAdvice('食事（血を補う）', [
      'ほうれん草・黒ごま・レバー・赤身肉・クコの実などを適量。',
      '過度なダイエット・食事抜きを避ける。',
    ]),
    sleep: makeAdvice('睡眠', [
      '就寝前のブルーライトを控え、入眠儀式を作る。',
      '寝具や室温を整え、睡眠の質を高める。',
    ]),
    exercise: makeAdvice('運動', [
      'ウォーキングやヨガなど循環を促す運動。',
      '立ち上がり時はゆっくり、ふらつき対策。',
    ]),
    lifestyle: makeAdvice('生活', [
      '鉄分・タンパク質・ビタミンCのバランス摂取。',
      '長時間同一姿勢を避けこまめに体を動かす。',
    ]),
  },
  yin_def: {
    diet: makeAdvice('食事（陰を養う）', [
      '豆腐・白木耳・梨・蜂蜜・卵・根菜スープなど。',
      '辛い物・揚げ物・アルコールの取り過ぎを控える。',
    ]),
    sleep: makeAdvice('睡眠', [
      '就寝前のカフェイン・アルコールは避ける。',
      '寝る前に軽いストレッチ・呼吸法で体温を適度に下げる。',
    ]),
    exercise: makeAdvice('運動', [
      'やや控えめの運動でオーバーヒートを回避。',
      '昼〜夕方の運動を中心にし、夜遅い激しい運動は避ける。',
    ]),
    lifestyle: makeAdvice('生活', [
      '長風呂・サウナのし過ぎに注意して潤いを保つ。',
      '室内の加湿・水分補給を意識する。',
    ]),
  },
  yang_def: {
    diet: makeAdvice('食事（温める）', [
      '生姜・ネギ・シナモン・羊肉・味噌汁など温性食材を適度に。',
      '冷たい飲食・生野菜中心は避け加熱調理を増やす。',
    ]),
    sleep: makeAdvice('睡眠', [
      '足元を温かく、寝る前の足湯や温熱で冷え対策。',
      '朝は日光を浴びて体を起こす。',
    ]),
    exercise: makeAdvice('運動', [
      '関節を温める動的ストレッチから開始。',
      '無理のない筋トレで体熱産生を促す。',
    ]),
    lifestyle: makeAdvice('生活', [
      '下半身を冷やさない服装。',
      '長時間の冷房直撃を避ける。',
    ]),
  },
  phlegm_damp: {
    diet: makeAdvice('食事（湿をさばく）', [
      'ハトムギ・冬瓜・生姜・大根を取り入れる。',
      '甘い物・脂っこい物・アルコールを控える。',
    ]),
    sleep: makeAdvice('睡眠', [
      '就寝3時間前までに食事を済ませる。',
      'いびき・無呼吸傾向がある場合は専門相談も検討。',
    ]),
    exercise: makeAdvice('運動', [
      '汗ばむ程度の有酸素運動で巡りを促進。',
      '朝の散歩で代謝スイッチを入れる。',
    ]),
    lifestyle: makeAdvice('生活', [
      '入浴で発汗を促し、湿気の多い環境を避ける。',
      '塩分・水分の過剰摂取に注意。',
    ]),
  },
  stagnation: {
    diet: makeAdvice('食事（気の巡り）', [
      '柑橘・ジャスミン茶・紫蘇・ミント・黒酢など。',
      '暴飲暴食を避け、よく噛んで食べる。',
    ]),
    sleep: makeAdvice('睡眠', [
      '就寝前に感情のオフタイムを作る（日記・感謝リスト）。',
      '寝る前のSNS・仕事メールは避ける。',
    ]),
    exercise: makeAdvice('運動', [
      'リズミカルなウォーキング、音楽に合わせた軽運動。',
      '胸郭を開くストレッチで呼吸を深く。',
    ]),
    lifestyle: makeAdvice('生活', [
      'タスク管理で先延ばしを減らす。',
      '日光を浴びてセロトニン分泌を促す。',
    ]),
  },
  blood_stasis: {
    diet: makeAdvice('食事（瘀を動かす）', [
      '黒豆・玉ねぎ・ナス・サバ・紅花茶など巡りを助ける食材。',
      '冷たい物の摂り過ぎに注意。',
    ]),
    sleep: makeAdvice('睡眠', [
      '就寝前に首肩の温熱＋ストレッチで血流改善。',
      '同一姿勢を避け、寝返りしやすい寝具を選ぶ。',
    ]),
    exercise: makeAdvice('運動', [
      '体幹・下肢の筋力トレーニングでポンプ機能UP。',
      '長時間座りっぱなしを避け、1時間に一度立つ。',
    ]),
    lifestyle: makeAdvice('生活', [
      '入浴で体を温め、冷え・ストレスをため込まない。',
      '喫煙は血流悪化のため控える。',
    ]),
  },
  damp_heat: {
    diet: makeAdvice('食事（湿熱をさばく）', [
      '苦味・淡味を取り入れる（ゴーヤ・セロリ・緑茶）。',
      '辛・油・酒は控えめに。',
    ]),
    sleep: makeAdvice('睡眠', [
      '室温・湿度を快適に保ち、寝具は吸湿性の高いもの。',
      '就寝前の重い食事は避ける。',
    ]),
    exercise: makeAdvice('運動', [
      '汗をかきすぎない中強度の運動で代謝を整える。',
      '日中の運動を中心に、夜の過度な運動は避ける。',
    ]),
    lifestyle: makeAdvice('生活', [
      '通気のよい服装・環境作り。',
      '肌トラブル時は清潔と保湿のバランスを意識。',
    ]),
  },
  stomach_heat: {
    diet: makeAdvice('食事（胃熱をさます）', [
      'キュウリ・トマト・梨・緑豆・大根などでクールダウン。',
      '辛い物・アルコール・揚げ物・甘味を控える。',
    ]),
    sleep: makeAdvice('睡眠', [
      '寝る3時間前までに食事を済ませる。',
      '寝る前はぬるめのシャワーや軽いストレッチで落ち着く。',
    ]),
    exercise: makeAdvice('運動', [
      '高強度運動のやり過ぎを避け、適度な汗に留める。',
      '屋外では日差しの強い時間帯を避ける。',
    ]),
    lifestyle: makeAdvice('生活', [
      'ストレス発散の方法を複数用意（散歩・音楽・会話）。',
      '胃腸が落ち着かない時はカフェイン控えめに。',
    ]),
  },
}
