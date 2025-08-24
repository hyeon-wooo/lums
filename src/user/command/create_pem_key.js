import { execSync, spawnSync } from "child_process";
import path from "path";
import fs from "fs";
import userCommand from "./index.js";

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
  execSync(`echo "${pubFilePath}" >> ${sshDir}/authorized_keys`);

  // 권한 조정

  execSync(`chmod 600 ${pemFilePath}`);
  execSync(`chmod 644 ${pubFilePath}`);
  execSync(`chmod 700 ${sshDir}`);
  const { uid, gid } = await userCommand.getUserByUserName(userName);
  execSync(`chown -R ${uid}:${gid} ${sshDir}`);

  return pemFilePath;
};

export default createPEMKey;
