import { execSync } from "child_process";

const deleteGroup = async ({ name }) => {
  const command = `groupdel ${name}`;
  execSync(command);
};

export default deleteGroup;
