import execCommand from "../../shared/exec_command.js";

const delPassword = async (name) => {
  execCommand(`passwd -d ${name}`);
};

export default delPassword;
