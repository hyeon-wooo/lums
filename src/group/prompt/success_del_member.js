const ko = (groupName, userName) =>
  `🗑️ ${userName} 사용자를 ${groupName} 그룹에서 제거했습니다.`;

const en = (groupName, userName) =>
  `🗑️ Removed ${userName} from ${groupName} group.`;

const successDelMemberPrompt = {
  ko,
  en,
};

export default successDelMemberPrompt;
