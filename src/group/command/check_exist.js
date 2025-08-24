import { execSync } from "child_process";

const checkGroupExist = async ({ gidOrName }) => {
  const command = `getent group ${gidOrName}`;
  try {
    execSync(command).toString();
    return true;
  } catch (error) {
    return false;
  }
};

export default checkGroupExist;
