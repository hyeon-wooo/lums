#!/usr/bin/env node
import inquirer from "inquirer";
import mainPrompt from "../prompt/main.js";
import userInterface from "../../user/interface/index.js";
import groupInterface from "../../group/interface/index.js";
import settingsInterface from "../../settings/interface/index.js";
import settingsStore from "../../settings/store.js";

const mainInterface = async () => {
  while (true) {
    const language = settingsStore.get().language ?? "en";

    const prompt = mainPrompt[language];
    const { action } = await inquirer.prompt([prompt]);

    switch (action) {
      // User
      case prompt.choices[0]:
        await userInterface.main();
        break;
      // Group
      case prompt.choices[1]:
        await groupInterface.main();
        break;
      // Settings
      case prompt.choices[2]:
        await settingsInterface.main();
        break;
      // Exit
      case prompt.choices[3]:
        return 0;
    }
  }
};

export default mainInterface;
