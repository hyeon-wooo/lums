import execCommand from "../../shared/exec_command.js";

const checkGroupExist = async ({ gidOrName }) => {
  const command = `getent group ${gidOrName}`;
  try {
    execCommand(command).toString();
    return true;
  } catch (error) {
    return false;
  }
};

export default checkGroupExist;
