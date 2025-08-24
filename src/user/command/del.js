import { execSync } from "child_process";

const delUser = async (name, isDeleteHome = false) => {
  const command = `userdel${isDeleteHome ? " -r" : ""} ${name}`;
  execSync(command);
};

export default delUser;
