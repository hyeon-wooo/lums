import execCommand from "../../shared/exec_command.js";

const delMember = async ({ groupName, userName }) => {
  const command = `gpasswd -d ${userName} ${groupName}`;
  execCommand(command);
};

export default delMember;
