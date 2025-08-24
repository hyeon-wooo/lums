// import readFileSafe from "../../shared/read_file.js";
import execCommand from "../../shared/exec_command.js";

const getGroups = () => {
  const lines = execCommand("cat /etc/group").toString().split("\n");
  const groups = [];
  for (const line of lines) {
    if (!line) continue;
    const [name, _x, gidStr, membersStr = ""] = line.split(":");
    const gid = Number(gidStr);
    const members = membersStr ? membersStr.split(",").filter(Boolean) : [];
    groups.push({ name, gid, members });
  }
  return groups;
};

// - 모든 그룹: await getList()
// - 특정 사용자 소속 그룹: await getList({ username: "username" })
const getList = async ({ username } = {}) => {
  let groups = getGroups();
  if (!username) return groups;

  const result = new Set();
  for (const g of groups) if (g.members.includes(username)) result.add(g);
  return Array.from(result);
};

export default getList;
