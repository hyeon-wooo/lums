import { execSync } from "child_process";

const addUser = async ({ name, uid, gid, home, shell, gecos }) => {
  let command = `adduser `;
  if (uid) command += `--uid ${uid} `;
  if (gid) command += `--gid ${gid} `;
  if (home) command += `--home ${home} `;
  if (shell) command += `--shell ${shell} `;
  if (gecos) command += `--gecos ${gecos} `;
  command += `${name}`;

  const result = execSync(command).toString();
  console.log("result:", result);
};

export default addUser;
