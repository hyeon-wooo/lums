import inquirer from "inquirer";
import addUserPrompt from "../prompt/add.js";
import requiredNamePrompt from "../prompt/required_name.js";
import userCommand from "../command/index.js";

const addUser = async (language) => {
  const prompt = addUserPrompt[language];
  const { name, uid, gid, home, shell, gecos } = await inquirer.prompt([
    prompt.name,
    prompt.uid,
    prompt.gid,
    prompt.home,
    prompt.shell,
    prompt.gecos,
  ]);

  if (!name) {
    console.warn(requiredNamePrompt[language]);
    return;
  }

  await userCommand.addUser({ name, uid, gid, home, shell, gecos });
};

export default addUser;
