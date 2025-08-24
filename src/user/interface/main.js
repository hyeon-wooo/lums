import inquirer from "inquirer";
import mainPrompt from "../prompt/main.js";
import userCommand from "../command/index.js";
import invalidInputPrompt from "../../shared/prompt/invalid_input.js";
import userInterface from "./index.js";
import settingsStore from "../../settings/store.js";

const main = async () => {
  const language = settingsStore.get().language ?? "en";

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
      // Change password
      case prompt.choices[2]:
        await userInterface.changePassword(language);
        break;
      // Remove password
      case prompt.choices[3]:
        await userInterface.delPassword(language);
        break;
      // Create PEM key
      case prompt.choices[4]:
        await userInterface.createPEMKey(language);
        break;
      // Delete user
      case prompt.choices[5]:
        await userInterface.deleteUser(language);
        break;
      // Go back
      case prompt.choices[6]:
        return 0;
      default:
        console.log(invalidInputPrompt[language].message);
    }
  }
};

export default main;
