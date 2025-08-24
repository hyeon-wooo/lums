const ko = {
  type: "list",
  name: "action",
  message: "\n[그룹 관리] 원하는 동작을 선택해주세요.",
  choices: [
    "목록 출력 (GID 1000 이상)",
    "목록 출력 (전체)",
    "추가",
    "삭제",
    "멤버 추가",
    "멤버 삭제",
    "이전으로",
  ],
};

const en = {
  type: "list",
  name: "action",
  message: "\n[Group Management] Select the action you want to perform.",
  choices: [
    "Print list (GID 1000 or more)",
    "Print list (all)",
    "Add",
    "Delete",
    "Add member",
    "Delete member",
    "Go back",
  ],
};

const mainPrompt = {
  ko,
  en,
};

export default mainPrompt;
