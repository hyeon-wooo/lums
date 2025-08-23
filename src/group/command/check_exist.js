import { execSync } from "child_process";

const checkGroupExist = async ({ gid }) => {
  const command = `getent group ${gid}`;
  try {
    execSync(command).toString();
    return true;
  } catch (error) {
    return false;
  }
};

export default checkGroupExist;
