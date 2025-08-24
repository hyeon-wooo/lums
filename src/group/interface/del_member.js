import inquirer from "inquirer";
import groupCommand from "../command/index.js";
import inputNamePrompt from "../prompt/input_name.js";
import addMemberPrompt from "../prompt/add_member.js";
import notFoundPrompt from "../prompt/not_found.js";
import userCommand from "../../user/command/index.js";
import notFoundUserPrompt from "../../user/prompt/not_found.js";
import successDelMemberPrompt from "../prompt/success_del_member.js";

const delMember = async (language) => {
  let groupName = "";

  while (!groupName) {
    const { groupName: name } = await inquirer.prompt([
      inputNamePrompt[language],
    ]);
    if (!(await groupCommand.checkGroupExist({ gidOrName: name }))) {
      console.log(notFoundPrompt[language](name));
      continue;
    }
    groupName = name;
  }

  let userName = "";
  while (!userName) {
    const { userName: name } = await inquirer.prompt([
      addMemberPrompt[language],
    ]);
    if (!(await userCommand.checkUserExist({ uidOrName: name }))) {
      console.log(notFoundUserPrompt[language](name));
      continue;
    }

    userName = name;
  }

  await groupCommand.delMember({ groupName, userName });
  console.log(successDelMemberPrompt[language](groupName, userName));
};

export default delMember;
