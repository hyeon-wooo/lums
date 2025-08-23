const ko = {
  type: "list",
  name: "action",
  message: "원하는 동작을 선택해주세요. (1 - 4 중 입력)",
  choices: [
    "1. 사용자 목록 출력",
    "2. 사용자 추가",
    "3. 사용자 삭제",
    "4. 이전으로",
  ],
};

const en = {
  type: "list",
  name: "action",
  message: "Select the action you want to perform. (Enter 1 - 4)",
  choices: [
    "1. Print user list",
    "2. Add user",
    "3. Delete user",
    "4. Go back",
  ],
};

const mainPrompt = {
  ko,
  en,
};

export default mainPrompt;
