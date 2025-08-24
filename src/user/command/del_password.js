import { execSync } from "child_process";

const delPassword = async (name) => {
  execSync(`passwd -d ${name}`);
};

export default delPassword;
