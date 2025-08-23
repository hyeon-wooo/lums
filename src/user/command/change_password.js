import { spawnSync } from "child_process";

// Ubuntu/Debian: chpasswd에 "name:password"를 stdin으로 전달
const changePassword = async ({ name, password }) => {
  const res = spawnSync("chpasswd", [], {
    input: `${name}:${password}\n`,
    encoding: "utf8",
  });

  const stderr = res.stderr || "";
  const stdout = res.stdout || "";
  const hasBadMsg =
    /BAD PASSWORD|잘못된 비밀번호/i.test(stderr) ||
    /BAD PASSWORD|잘못된 비밀번호/i.test(stdout);

  if (res.status !== 0 || hasBadMsg) {
    const msg = (stderr || stdout || "비밀번호 변경 실패").trim();
    throw new Error(msg);
  }
};

export default changePassword;
