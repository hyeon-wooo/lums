import inquirer from "inquirer";
import settingsStore from "../store.js";
import mainPrompt from "../prompt/main.js";
import settingsInterface from "./index.js";

const main = async () => {
  while (true) {
    const language = settingsStore.get().language ?? "en";

    const prompt = mainPrompt[language];
    const { action } = await inquirer.prompt([prompt]);

    switch (action) {
      // Change language
      case prompt.choices[0]:
        await settingsInterface.changeLanguage(language);
        break;
      // Change logging command
      case prompt.choices[1]:
        await settingsInterface.changeLoggingCommand(language);
        break;
      // Go back
      case prompt.choices[2]:
        return 0;
    }
  }
};

export default main;
