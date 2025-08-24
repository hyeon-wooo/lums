import printList from "./print_list.js";
import addUser from "./add.js";
import changePassword from "./change_password.js";
import delUser from "./del.js";
import createPEMKey from "./create_pem_key.js";
import getUserByUserName from "./get.js";
import delPassword from "./del_password.js";

const userCommand = {
  printList,
  addUser,
  changePassword,
  delUser,
  createPEMKey,
  getUserByUserName,
  delPassword,
};

export default userCommand;
