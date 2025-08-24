import inquirer from "inquirer";
import inputNamePrompt from "../prompt/input_name.js";
import userCommand from "../command/index.js";
import requiredNamePrompt from "../prompt/required_name.js";
import changePasswordPrompt from "../prompt/change_password.js";
import successChangePasswordPrompt from "../prompt/success_change_password.js";

const changePassword = async (language) => {
  let userName = "";

  while (!userName) {
    const prompt = inputNamePrompt[language];
    const { name } = await inquirer.prompt([prompt]);

    if (!name) console.warn(requiredNamePrompt[language]);

    userName = name;
  }

  const { password } = await inquirer.prompt([changePasswordPrompt[language]]);
  await userCommand.changePassword({ name: userName, password });

  console.log(successChangePasswordPrompt[language]);
};

export default changePassword;
