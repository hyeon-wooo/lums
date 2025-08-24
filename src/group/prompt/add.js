const ko = {
  name: {
    type: "input",
    name: "name",
    message: "그룹 이름을 입력하세요: ",
  },
  gid: {
    type: "input",
    name: "gid",
    message: "그룹 ID를 입력하세요. (선택사항): ",
  },
};

const en = {
  name: {
    type: "input",
    name: "name",
    message: "Enter the group name: ",
  },
  gid: {
    type: "input",
    name: "gid",
    message: "Group ID (optional): ",
  },
};

const addPrompt = {
  ko,
  en,
};

export default addPrompt;
