import addUser from "./add.js";
import main from "./main.js";
import deleteUser from "./del.js";
import changePassword from "./change_password.js";
import createPEMKey from "./create_pem_key.js";
import delPassword from "./del_password.js";

const userInterface = {
  main,
  addUser,
  deleteUser,
  changePassword,
  createPEMKey,
  delPassword,
};
export default userInterface;
