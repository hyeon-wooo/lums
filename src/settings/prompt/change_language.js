import { LANGUAGES } from "../constant.js";

const ko = (currentLanguage) => ({
  type: "list",
  name: "action",
  message: `변경할 언어를 선택하세요 (현재언어: ${
    LANGUAGES.find((lang) => lang.value === currentLanguage)?.label
  }): `,
  choices: LANGUAGES.map((language) => language.label),
});

const en = (currentLanguage) => ({
  type: "list",
  name: "action",
  message: `Select the language to change (current language: ${
    LANGUAGES.find((lang) => lang.value === currentLanguage)?.label
  }): `,
  choices: LANGUAGES.map((language) => language.label),
});

export default { ko, en };
