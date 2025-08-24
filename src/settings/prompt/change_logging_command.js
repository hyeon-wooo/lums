const ko = (currentLoggingCommand) => ({
  type: "list",
  name: "action",
  message: `실행되는 명령어를 터미널에 출력할까요? (현재: ${
    currentLoggingCommand ? "예" : "아니오"
  })`,
  choices: ["아니오", "예"],
});

const en = (currentLoggingCommand) => ({
  type: "list",
  name: "action",
  message: `Print the command executed in the terminal? (current: ${
    currentLoggingCommand ? "Yes" : "No"
  })`,
  choices: ["No", "Yes"],
});

export default { ko, en };
