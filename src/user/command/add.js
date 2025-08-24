import { execSync } from "child_process";
import { getNextUid, getNextGid } from "./id_allocator.js";
import groupCommand from "../../group/command/index.js";
import execCommand from "../../shared/exec_command.js";

const addUser = async ({ name, uid, gid, shell, gecos }) => {
  let command = `useradd -m `;
  if (!uid) uid = getNextUid();
  if (!gid) gid = getNextGid();
  command += `-u ${uid} `;
  command += `-g ${gid} `;
  if (shell) command += `-s ${shell} `;
  if (gecos) command += `-c ${gecos} `;
  command += `${name}`;

  if (!(await groupCommand.checkGroupExist({ gidOrName: gid })))
    await groupCommand.addGroup({ name, gid });

  execCommand(command).toString();

  return { name, uid };
};

export default addUser;
