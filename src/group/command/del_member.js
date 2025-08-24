import { execSync } from "child_process";

const delMember = async ({ groupName, userName }) => {
  const command = `gpasswd -d ${userName} ${groupName}`;
  execSync(command);
};

export default delMember;
