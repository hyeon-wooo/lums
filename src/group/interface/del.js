import inquirer from "inquirer";
import delPrompt from "../prompt/del.js";
import successDeletePrompt from "../prompt/success_del.js";
import groupCommand from "../command/index.js";
import notFoundPrompt from "../prompt/not_found.js";

const deleteGroup = async (language) => {
  let deletingName = "";
  while (!deletingName) {
    const prompt = delPrompt[language];
    const { name } = await inquirer.prompt([prompt]);
    const exist = await groupCommand.checkGroupExist({ gidOrName: name });
    if (!exist) {
      console.log(notFoundPrompt[language](name));
      continue;
    }

    deletingName = name;
  }

  await groupCommand.deleteGroup({ name: deletingName });
  console.log(successDeletePrompt[language](deletingName));
};

export default deleteGroup;
