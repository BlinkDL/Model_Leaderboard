export const langMap: {
  [key: string]: string;
} = {
  "ar/acc": "Arabic",
  "bg/acc": "Bulgarian",
  "de/acc": "German",
  "el/acc": "Greek",
  "en/acc": "English",
  "es/acc": "Spanish",
  "fr/acc": "French",
  "hi/acc": "Hindi",
  "ru/acc": "Russian",
  "sw/acc": "Swahili",
  "th/acc": "Thai",
  "tr/acc": "Turkish",
  "ur/acc": "Urdu",
  "vi/acc": "Vietnamese",
  "zh/acc": "Chinese",
  "eu/acc": "Basque",
  "id/acc": "Indonesian",
  "my/acc": "Burmese",
  "te/acc": "Telugu",
  "it/acc": "Italian",
  "ar/ppl": "Arabic",
  "bg/ppl": "Bulgarian",
  "de/ppl": "German",
  "el/ppl": "Greek",
  "en/ppl": "English",
  "es/ppl": "Spanish",
  "fr/ppl": "French",
  "hi/ppl": "Hindi",
  "ru/ppl": "Russian",
  "sw/ppl": "Swahili",
  "th/ppl": "Thai",
  "tr/ppl": "Turkish",
  "ur/ppl": "Urdu",
  "vi/ppl": "Vietnamese",
  "zh/ppl": "Chinese",
  "eu/ppl": "Basque",
  "id/ppl": "Indonesian",
  "my/ppl": "Burmese",
  "te/ppl": "Telugu",
  "it/ppl": "Italian",
};

export const tableMap: {
  value: string;
  label: string;
  sub: string[];
}[] = [
  {
    value: "model",
    sub: ['Size', 'Name'],
    label: "Language Model Leaderboard"
  },
  // { value: "modelSize", label: "Sizes" },
  // { value: "modelName", label: "Model" },
  {
    value: "lambada_openai/",
    sub: ["ppl", "acc"],
    label: "LAMBADA",
  },
  {
    value: "piqa/",
    sub: ["acc", "acc_norm"],
    label: "PIQA",
  },
  { value: "storycloze_2016/", label: "StoryCloze16", sub: ["acc"] },
  {
    value: "hellaswag/",
    sub: ["acc", "acc_norm"],
    label: "Hellaswag",
  },
  { value: "winogrande/", label: "WinoGrande", sub: ["acc"] },
  {
    value: "arc_challenge/",
    sub: ["acc", "acc_norm"],
    label: "ARC_challenge",
  },
  {
    value: "arc_easy/",
    sub: ["acc", "acc_norm"],
    label: "ARC_easy",
  },
  {
    value: "headqa_en/",
    sub: ["acc", "acc_norm"],
    label: "HeadQA_en",
  },
  {
    value: "openbookqa/",
    sub: ["acc", "acc_norm"],
    label: "OpenbookQA",
  },
  {
    value: "sciq/",
    sub: ["acc", "acc_norm"],
    label: "SciQ",
  },
  {
    value: "record/",
    sub: ["f1", "em"],
    label: "ReCoRD",
  },
  { value: "copa/", label: "COPA", sub: ["acc"] },
  {
    value: "lambada_openai_mt_",
    sub: [
      "de/ppl",
      "de/acc",
      "es/ppl",
      "es/acc",
      "fr/ppl",
      "fr/acc",
      "it/ppl",
      "it/acc",
      "%avg",
    ],
    label: "xLBD",
  },
  {
    value: "xstory_cloze_",
    sub: [
      "ar/acc",
      "en/acc",
      "es/acc",
      "eu/acc",
      "hi/acc",
      "id/acc",
      "my/acc",
      "ru/acc",
      "sw/acc",
      "te/acc",
      "zh/acc",
      "%avg",
    ],
    label: "xSC",
  },
  {
    value: "xwinograd_",
    sub: ["en/acc", "fr/acc", "jp/acc", "pt/acc", "ru/acc", "zh/acc", "%avg"],
    label: "xWG",
  },
  {
    value: "xcopa_",
    sub: [
      "et/acc",
      "ht/acc",
      "id/acc",
      "it/acc",
      "qu/acc",
      "sw/acc",
      "ta/acc",
      "th/acc",
      "tr/acc",
      "vi/acc",
      "zh/acc",
      "%avg",
    ],
    label: "xCOPA",
  },
  {
    value: "truthfulqa_mc/",
    sub: ["mc1", "mc2"],
    label: "truthfulqa",
  },
  {
    value: "race/",
    sub: ["acc"],
    label: "race",
  },
  {
    value: "pubmedqa/",
    sub: ["acc"],
    label: "pubmedqa",
  },
  {
    value: "mc_taco/",
    sub: ["em", "f1"],
    label: "mc_taco",
  },
  {
    value: "logiqa/",
    sub: ["acc", "acc_norm"],
    label: "logiqa",
  },
];

export type EvalValue = {
  modelName: string;
  "storycloze_2016/acc"?: number;
  "headqa_en/acc"?: number;
  "headqa_en/acc_norm"?: number;
  "lambada_openai/ppl"?: number;
  "lambada_openai/acc"?: number;
  "truthfulqa_mc/mc1"?: number;
  "truthfulqa_mc/mc2"?: number;
  "xstory_cloze_ar/acc"?: number;
  "xstory_cloze_en/acc"?: number;
  "xstory_cloze_es/acc"?: number;
  "xstory_cloze_eu/acc"?: number;
  "xstory_cloze_hi/acc"?: number;
  "xstory_cloze_id/acc"?: number;
  "xstory_cloze_my/acc"?: number;
  "xstory_cloze_ru/acc"?: number;
  "xstory_cloze_sw/acc"?: number;
  "xstory_cloze_te/acc"?: number;
  "xstory_cloze_zh/acc"?: number;
  "xnli_ar/acc"?: number;
  "xnli_bg/acc"?: number;
  "xnli_de/acc"?: number;
  "xnli_el/acc"?: number;
  "xnli_en/acc"?: number;
  "xnli_es/acc"?: number;
  "xnli_fr/acc"?: number;
  "xnli_hi/acc"?: number;
  "xnli_ru/acc"?: number;
  "xnli_sw/acc"?: number;
  "xnli_th/acc"?: number;
  "xnli_tr/acc"?: number;
  "xnli_ur/acc"?: number;
  "xnli_vi/acc"?: number;
  "xnli_zh/acc"?: number;
  "hellaswag/acc"?: number;
  "hellaswag/acc_norm"?: number;
  "winogrande/acc"?: number;
  "arc_challenge/acc"?: number;
  "arc_challenge/acc_norm"?: number;
  "arc_easy/acc"?: number;
  "arc_easy/acc_norm"?: number;
  "openbookqa/acc"?: number;
  "openbookqa/acc_norm"?: number;
  "sciq/acc": number;
  "sciq/acc_norm": number;
  "record/f1": number;
  "record/em": number;
  "copa/acc": number;
};

export const modelInfo: {
  [key: string]: number;
} = {
  "pythia-1.4b-v0": 1.4,
  "gpt-neo-1.3B": 1.4,
  "falcon-rw-1b": 1.3,
  "42dot_LLM-SFT-1.3B": 1.3,
  "42dot_LLM-PLM-1.3B": 1.3,
  "TinyLlama-1.1B-intermediate-step-480k-1T": 1.1,
  "TinyLlama-1.1B-Chat-v0.3": 1.1,
  "bling-1.4b-0.1": 1.4,
  "pythia-2.8b-v0": 2.8,
  "gpt-neo-2.7B": 2.8,
  "stablelm-3b-4e1t": 2.8,
  "btlm-3b-8k-base": 2.7,
  "stablelm-base-alpha-3b-v2": 2.8,
  open_llama_3b_v2: 3.4,
  long_llama_3b: 3.4,
};
