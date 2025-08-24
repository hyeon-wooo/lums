import { execSync } from "child_process";
import { getNextGid } from "../../user/command/id_allocator.js";

const addGroup = async ({ name, gid }) => {
  // gid인자가 없는 경우 자동으로 증가하는 그룹 ID 사용
  if (!gid) gid = getNextGid();

  const command = `groupadd -g ${gid} ${name}`;
  execSync(command);

  return { name, gid };
};

export default addGroup;
