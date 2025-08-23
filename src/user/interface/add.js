import inquirer from "inquirer";
import addUserPrompt from "../prompt/add.js";
import requiredNamePrompt from "../prompt/required_name.js";
import userCommand from "../command/index.js";
import changePasswordPrompt from "../prompt/change_password.js";

const addUser = async (language) => {
  const prompt = addUserPrompt[language];
  const { name, uid, gid, shell, gecos } = await inquirer.prompt([
    prompt.name,
    prompt.uid,
    prompt.gid,
    prompt.shell,
    prompt.gecos,
  ]);

  if (!name) {
    console.warn(requiredNamePrompt[language]);
    return;
  }

  const created = await userCommand.addUser({
    name,
    uid,
    gid,
    shell,
    gecos,
  });

  while (true) {
    const { password } = await inquirer.prompt([
      changePasswordPrompt[language],
    ]);
    try {
      await userCommand.changePassword({ name: created.name, password });
      break;
    } catch (e) {
      console.warn(e?.message ?? e);
    }
  }

  console.log(`✅ 사용자가 생성되었습니다. UID: ${created.uid}`);
};

export default addUser;
