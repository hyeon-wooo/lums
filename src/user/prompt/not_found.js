const ko = (name) => `❌ 존재하지 않는 사용자입니다. (${name})`;

const en = (name) => `❌ User not found. (${name})`;

const notFoundUserPrompt = {
  ko,
  en,
};

export default notFoundUserPrompt;
