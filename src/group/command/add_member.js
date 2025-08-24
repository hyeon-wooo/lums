import { execSync } from "child_process";

const addMember = async ({ groupName, userName }) => {
  const command = `gpasswd -a ${userName} ${groupName}`;
  execSync(command);
};

export default addMember;
