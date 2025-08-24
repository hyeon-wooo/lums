const ko = (name, gid) =>
  `✅ 그룹 ${name}이(가) 성공적으로 추가되었습니다. (GID: ${gid})`;

const en = (name, gid) => `✅ Group ${name} added successfully. (GID: ${gid})`;

const successAddPrompt = {
  ko,
  en,
};

export default successAddPrompt;
