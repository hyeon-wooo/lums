import execCommand from "../../shared/exec_command.js";

const deleteGroup = async ({ name }) => {
  const command = `groupdel ${name}`;
  execCommand(command);
};

export default deleteGroup;
