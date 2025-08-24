import addUser from "./add.js";
import main from "./main.js";
import deleteUser from "./del.js";
import changePassword from "./change_password.js";
import createPEMKey from "./create_pem_key.js";

const userInterface = {
  main,
  addUser,
  deleteUser,
  changePassword,
  createPEMKey,
};
export default userInterface;
