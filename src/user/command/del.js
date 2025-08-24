import { execSync } from "child_process";

const delUser = async (name) => {
  const command = `userdel -r ${name}`;
  execSync(command);
};

export default delUser;
