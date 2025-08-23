import inquirer from "inquirer";
import mainPrompt from "../prompt/main.js";
import userCommand from "../command/index.js";
import invalidInputPrompt from "../../shared/prompt/invalid_input.js";
import userInterface from "./index.js";

const main = async (language) => {
  while (true) {
    const prompt = mainPrompt[language];
    const { action } = await inquirer.prompt([prompt]);

    switch (action) {
      // Print user list
      case prompt.choices[0]:
        await userCommand.printList(language);
        break;
      // Add user
      case prompt.choices[1]:
        await userInterface.addUser(language);
        break;
      // Delete user
      case prompt.choices[2]:
        break;
      // Go back
      case prompt.choices[3]:
        return 0;
      default:
        console.log(invalidInputPrompt[language].message);
    }
  }
};

export default main;
