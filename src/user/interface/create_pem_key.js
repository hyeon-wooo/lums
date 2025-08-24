import inquirer from "inquirer";
import userCommand from "../command/index.js";
import successCreatePEMKeyPrompt from "../prompt/success_create_pem_key.js";
import inputNamePrompt from "../prompt/input_name.js";
import errorPemExistsPrompt from "../prompt/error_pem_exists.js";
import errorPubExistsPrompt from "../prompt/error_pub_exists.js";

const createPEMKey = async (language) => {
  const { name } = await inquirer.prompt([inputNamePrompt[language]]);
  try {
    const pemFilePath = await userCommand.createPEMKey(name);

    console.log(successCreatePEMKeyPrompt[language], pemFilePath);
  } catch (e) {
    switch (e.message) {
      case "Pem exists":
        console.log(errorPemExistsPrompt[language]);
        break;
      case "Pub exists":
        console.log(errorPubExistsPrompt[language]);
        break;
      default:
        console.log(e.message);
    }
  }
};

export default createPEMKey;
