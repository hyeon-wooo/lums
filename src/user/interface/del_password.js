import inquirer from "inquirer";
import inputNamePrompt from "../prompt/input_name.js";
import successDelPasswordPrompt from "../prompt/success_del_password.js";
import userCommand from "../command/index.js";

const delPassword = async (language) => {
  const { name } = await inquirer.prompt([inputNamePrompt[language]]);
  try {
    await userCommand.delPassword(name);
    console.log(successDelPasswordPrompt[language]);
  } catch (e) {
    console.log(e.message);
  }
};

export default delPassword;
