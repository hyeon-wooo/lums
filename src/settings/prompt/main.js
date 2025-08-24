const ko = {
  type: "list",
  name: "action",
  message: "\n[설정 관리] 원하는 동작을 선택해주세요.",
  choices: ["언어 변경", "명령어 실행 로깅 여부 변경", "이전으로"],
};

const en = {
  type: "list",
  name: "action",
  message: "\n[Settings management] Select the action you want to perform.",
  choices: ["Change language", "Change logging command", "Go back"],
};

export default { ko, en };
