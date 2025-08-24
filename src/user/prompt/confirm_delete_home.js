const ko = {
  type: "list",
  name: "action",
  message: "❓ 사용자의 홈 디렉토리까지 삭제하시겠습니까?",
  choices: ["아니오", "예"],
};

const en = {
  type: "list",
  name: "action",
  message: "❓ Delete user's home directory?",
  choices: ["No", "Yes"],
};

const confirmDeleteHomePrompt = {
  ko,
  en,
};

export default confirmDeleteHomePrompt;
