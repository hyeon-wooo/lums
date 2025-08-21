const ko = {
  type: "list",
  name: "action",
  message: "무엇을 관리할까요?",
  choices: ["사용자", "그룹", "설정", "종료"],
};

const en = {
  type: "list",
  name: "action",
  message: "What would you like to manage?",
  choices: ["User", "Group", "Settings", "Exit"],
};

const indexPrompt = {
  ko,
  en,
};

export default indexPrompt;
