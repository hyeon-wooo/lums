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
      // Print group list
      case prompt.choices[0]:
        await groupCommand.printList(language);
        break;
      // Add group
      case prompt.choices[1]:
        // await groupCommand.addGroup(language);
        break;
      // Delete group
      case prompt.choices[2]:
        // await groupCommand.deleteGroup(language);
        break;
      // Go back
      case prompt.choices[3]:
        return 0;
      default:
        console.log(invalidInputPrompt[language]);
        break;
    }
  }
};

export default main;
