import { execSync } from "child_process";
import printCommand from "../../shared/print_command.js";

const checkUserExist = async ({ uidOrName }) => {
  const command = `cat /etc/passwd | grep -w ${uidOrName}`;
  printCommand(command);
  try {
    const result = execSync(command).toString();
    return !!result;
  } catch (error) {
    return false;
  }
};

export default checkUserExist;
