import execCommand from "../../shared/exec_command.js";

const addMember = async ({ groupName, userName }) => {
  const command = `gpasswd -a ${userName} ${groupName}`;
  execCommand(command);

  execCommand(`newgrp ${groupName}`);
};

export default addMember;
