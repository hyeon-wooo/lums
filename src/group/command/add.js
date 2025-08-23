import { execSync } from "child_process";

const addGroup = async ({ name, gid }) => {
  const command = `groupadd -g ${gid} ${name}`;
  execSync(command).toString();
};

export default addGroup;
