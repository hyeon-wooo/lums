import inquirer from "inquirer";
import changeLoggingCommandPrompt from "../prompt/change_logging_command.js";
import successChangePrompt from "../prompt/success_change.js";
import settingsStore from "../store.js";

const changeLoggingCommand = async (language) => {
  const currentLoggingCommand = settingsStore.get().loggingCommand;
  const prompt = changeLoggingCommandPrompt[language](currentLoggingCommand);
  const { action } = await inquirer.prompt([prompt]);

  settingsStore.update({ loggingCommand: action === prompt.choices[1] });

  console.log(successChangePrompt[language]);
};

export default changeLoggingCommand;
