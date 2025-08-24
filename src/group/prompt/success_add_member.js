const ko = (groupName, userName) =>
  `✅ ${userName} 사용자를 ${groupName} 그룹에 추가했습니다.`;

const en = (groupName, userName) =>
  `✅ Added ${userName} to ${groupName} group.`;

const successAddMemberPrompt = {
  ko,
  en,
};

export default successAddMemberPrompt;
