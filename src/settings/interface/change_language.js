import inquirer from "inquirer";
import changeLanguagePrompt from "../prompt/change_language.js";
import successChangePrompt from "../prompt/success_change.js";
import settingsStore from "../store.js";
import { LANGUAGES } from "../constant.js";

const changeLanguage = async (language) => {
  const prompt = changeLanguagePrompt[language](language);
  const { action } = await inquirer.prompt([prompt]);

  const selectedLanguage =
    LANGUAGES.find((language) => language.label === action)?.value || "en";

  settingsStore.update({ language: selectedLanguage });

  console.log(successChangePrompt[selectedLanguage]);
};

export default changeLanguage;
