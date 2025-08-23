#!/usr/bin/env node
import inquirer from "inquirer";
import mainPrompt from "../prompt/main.js";
import userInterface from "../../user/interface/index.js";
import groupInterface from "../../group/interface/index.js";
import settingsInterface from "../../settings/interface/index.js";

const mainInterface = async (language) => {
  while (true) {
    const prompt = mainPrompt[language];
    const { action } = await inquirer.prompt([prompt]);

    switch (action) {
      // User
      case prompt.choices[0]:
        await userInterface.main(language);
        break;
      // Group
      case prompt.choices[1]:
        await groupInterface.main(language);
        break;
      case prompt.choices[2]:
        await settingsInterface.main(language);
        break;
      // Exit
      case prompt.choices[3]:
        return 0;
    }
  }
};

export default mainInterface;
