import { execSync } from "child_process";

const printList = async () => {
  const result = execSync("cat /etc/passwd");
  console.log("result", result);
  return result;
};

export default printList;
