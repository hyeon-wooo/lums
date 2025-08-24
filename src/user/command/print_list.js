import { execSync } from "child_process";
import userListLabel from "../label/list_column.js";
import printTable from "../../shared/print_table.js";

const printList = async (language) => {
  const result = execSync("cat /etc/passwd").toString();

  const list = result
    .split("\n")
    .filter(
      (line) =>
        !!line &&
        !line.startsWith("#") &&
        !line.startsWith("_") &&
        !line.endsWith("nologin")
    );

  // /etc/passwd 포맷: name:x:uid:gid:comment:home:shell
  const rows = list
    .map((row) => {
      const parts = row.split(":");
      const name = parts[0] ?? "";
      const uid = parts[2] ?? "";
      const gid = parts[3] ?? "";
      const home = parts[5] ?? "";
      const shell = parts[6] ?? "";
      return [name, uid, gid, home, shell];
    })
    // 홈디렉터리가 /home으로 시작하지 않는 사용자는 제외
    .filter((row) => row[3].startsWith("/home"));

  printTable(userListLabel[language], rows);
};

export default printList;
