const ko = (name) => `❌ 존재하지 않는 그룹입니다. (${name})`;

const en = (name) => `❌ Group not found. (${name})`;

const notFoundPrompt = {
  ko,
  en,
};

export default notFoundPrompt;
