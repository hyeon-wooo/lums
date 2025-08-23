const ko = {
  name: {
    name: "name",
    type: "input",
    message: "사용자 이름을 입력하세요: ",
  },
  uid: {
    name: "uid",
    type: "input",
    message: "UID를 입력하세요. (선택사항): ",
  },
  gid: {
    name: "gid",
    type: "input",
    message: "GID를 입력하세요. (선택사항): ",
  },
  home: {
    name: "home",
    type: "input",
    message: "홈 디렉토리를 입력하세요. (기본값: /home/이름): ",
  },
  shell: {
    name: "shell",
    type: "input",
    message: "쉘을 입력하세요. (기본값: /bin/bash): ",
  },
  gecos: {
    name: "gecos",
    type: "input",
    message: "설명을 입력하세요. (선택사항): ",
  },
};

const en = {
  name: {
    name: "name",
    type: "input",
    message: "Enter the user name: ",
  },
  uid: {
    name: "uid",
    type: "input",
    message: "Enter the UID. (optional): ",
  },
  gid: {
    name: "gid",
    type: "input",
    message: "Enter the GID. (optional): ",
  },
  home: {
    name: "home",
    type: "input",
    message: "Enter the home directory. (default: /home/name): ",
  },
  shell: {
    name: "shell",
    type: "input",
    message: "Enter the shell. (default: /bin/bash): ",
  },
  gecos: {
    name: "gecos",
    type: "input",
    message: "Enter the description. (optional): ",
  },
};

const addUserPrompt = {
  ko,
  en,
};

export default addUserPrompt;
