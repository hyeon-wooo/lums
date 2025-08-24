const ko = {
  type: "list",
  name: "action",
  message: "\n[사용자 관리] 원하는 동작을 선택해주세요.",
  choices: [
    "목록 출력",
    "추가",
    "비밀번호 변경",
    "비밀번호 제거",
    "PEM키 생성",
    "삭제",
    "이전으로",
  ],
};

const en = {
  type: "list",
  name: "action",
  message: "\n[User Management] Select the action you want to perform.",
  choices: [
    "Print list",
    "Add",
    "Change password",
    "Remove password",
    "Create PEM key",
    "Delete",
    "Go back",
  ],
};

const mainPrompt = {
  ko,
  en,
};

export default mainPrompt;
