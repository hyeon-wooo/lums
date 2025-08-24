import execCommand from "../../shared/exec_command.js";

const delUser = async (name, isDeleteHome = false) => {
  const command = `userdel${isDeleteHome ? " -r" : ""} ${name}`;
  execCommand(command);
};

export default delUser;
