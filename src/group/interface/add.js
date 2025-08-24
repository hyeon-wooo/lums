import inquirer from "inquirer";
import addPrompt from "../prompt/add.js";
import successAddPrompt from "../prompt/success_add.js";
import groupCommand from "../command/index.js";

const addGroup = async (language) => {
  const prompt = addPrompt[language];
  const { name, gid } = await inquirer.prompt([prompt.name, prompt.gid]);

  const created = await groupCommand.addGroup({ name, gid });
  console.log(successAddPrompt[language](created.name, created.gid));
};

export default addGroup;
