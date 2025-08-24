import printCommand from "./print_command.js";
import { execSync } from "child_process";

const execCommand = (command) => {
  printCommand(command);
  return execSync(command);
};

export default execCommand;
