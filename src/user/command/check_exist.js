import { execSync } from "child_process";

const checkUserExist = async ({ uidOrName }) => {
  const command = `cat /etc/passwd | grep -w ${uidOrName}`;
  try {
    const result = execSync(command).toString();
    return !!result;
  } catch (error) {
    return false;
  }
};

export default checkUserExist;
