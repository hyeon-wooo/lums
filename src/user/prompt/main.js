const ko = {
  type: "list",
  name: "action",
  message: "원하는 동작을 선택해주세요.",
  choices: ["사용자 목록 출력", "사용자 추가", "사용자 삭제", "이전으로"],
};

const en = {
  type: "list",
  name: "action",
  message: "Select the action you want to perform.",
  choices: ["Print user list", "Add user", "Delete user", "Go back"],
};

const mainPrompt = {
  ko,
  en,
};

export default mainPrompt;
