import { execSync, spawnSync } from "child_process";
import path from "path";
import fs from "fs";
import userCommand from "./index.js";
import execCommand from "../../shared/exec_command.js";

const createPEMKey = async (userName) => {
  const sshDir = path.join("/home", userName, ".ssh");
  if (!fs.existsSync(sshDir)) fs.mkdirSync(sshDir);

  const pemFileName = `${userName}.pem`;
  const pubFileName = `${pemFileName}.pub`;
  const pemFilePath = path.join(sshDir, pemFileName);
  const pubFilePath = path.join(sshDir, pubFileName);

  if (fs.existsSync(pemFilePath)) throw new Error("Pem exists");
  if (fs.existsSync(pubFilePath)) throw new Error("Pub exists");

  // key 생성
  printCommand(`ssh-keygen -t rsa -b 4096 -f ${pemFilePath}`);
  const res = spawnSync("ssh-keygen", [
    "-t",
    "rsa",
    "-b",
    "4096",
    "-f",
    pemFilePath,
  ]);

  if (res.status !== 0) {
    throw new Error("PEM key creation failed");
  }

  // public key 등록
  execCommand(`echo "${pubFilePath}" >> ${sshDir}/authorized_keys`);

  // 권한 조정

  execCommand(`chmod 600 ${pemFilePath}`);
  execCommand(`chmod 644 ${pubFilePath}`);
  execCommand(`chmod 700 ${sshDir}`);
  const { uid, gid } = await userCommand.getUserByUserName(userName);
  execCommand(`chown -R ${uid}:${gid} ${sshDir}`);

  return pemFilePath;
};

export default createPEMKey;
