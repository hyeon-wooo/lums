import { spawnSync } from "child_process";
import printCommand from "../../shared/print_command.js";

const getUserByUserName = async (userName) => {
  printCommand(`id ${userName}`);
  const res = spawnSync("id", [userName]);
  if (res.status !== 0) {
    throw new Error("User not found");
  }

  const userInfo = res.stdout.toString().trim().split(" ");
  const uid = userInfo[0].split("=")[1].split("(")[0];
  const gid = userInfo[1].split("=")[1].split("(")[0];

  return { uid, gid };
};

export default getUserByUserName;
