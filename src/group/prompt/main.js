const ko = {
  type: "list",
  name: "action",
  message: "\n[그룹 관리] 원하는 동작을 선택해주세요.",
  choices: ["목록 출력", "추가", "삭제", "이전으로"],
};

const en = {
  type: "list",
  name: "action",
  message: "\n[Group Management] Select the action you want to perform.",
  choices: ["Print list", "Add", "Delete", "Go back"],
};

const mainPrompt = {
  ko,
  en,
};

export default mainPrompt;
