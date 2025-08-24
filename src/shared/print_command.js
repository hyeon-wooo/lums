import settingsStore from "../settings/store.js";

const printCommand = (command) => {
  const loggingCommand = settingsStore.get().loggingCommand;

  if (loggingCommand) console.log(`[ℹ️ Executed Command] ${command}`);
};

export default printCommand;
