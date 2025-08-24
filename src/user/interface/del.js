import inquirer from "inquirer";
import inputNamePrompt from "../prompt/input_name.js";
import userCommand from "../command/index.js";
import successDeletePrompt from "../prompt/success_delete.js";
import requiredNamePrompt from "../prompt/required_name.js";
import confirmDeleteHomePrompt from "../prompt/confirm_delete_home.js";

const deleteUser = async (language) => {
  let deletingName = "";

  while (!deletingName) {
    const prompt = inputNamePrompt[language];
    const { name } = await inquirer.prompt([prompt]);

    if (!name) console.warn(requiredNamePrompt[language]);

    deletingName = name;
  }

  const { action } = await inquirer.prompt([confirmDeleteHomePrompt[language]]);

  await userCommand.delUser(
    deletingName,
    action === confirmDeleteHomePrompt[language].choices[1]
  );

  console.log(successDeletePrompt[language]);
};

export default deleteUser;
