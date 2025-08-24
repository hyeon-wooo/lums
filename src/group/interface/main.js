import inquirer from "inquirer";
import mainPrompt from "../prompt/main.js";
import groupCommand from "../command/index.js";
import invalidInputPrompt from "../../shared/prompt/invalid_input.js";
import groupInterface from "./index.js";

const main = async (language) => {
  while (true) {
    const prompt = mainPrompt[language];
    const { action } = await inquirer.prompt([prompt]);

    switch (action) {
      // Print group list (GID 1000 or more)
      case prompt.choices[0]:
        await groupCommand.printList(language, { over1000: true });
        break;
      // Print group list (all)
      case prompt.choices[1]:
        await groupCommand.printList(language, { over1000: false });
        break;
      // Add group
      case prompt.choices[2]:
        await groupInterface.addGroup(language);
        break;
      // Delete group
      case prompt.choices[3]:
        await groupInterface.deleteGroup(language);
        break;
      // Go back
      case prompt.choices[4]:
        return 0;
      default:
        console.log(invalidInputPrompt[language]);
        break;
    }
  }
};

export default main;
