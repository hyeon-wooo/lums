import checkGroupExist from "./check_exist.js";
import addGroup from "./add.js";
import getList from "./list.js";
import printList from "./print_list.js";
import deleteGroup from "./del.js";
import addMember from "./add_member.js";
import delMember from "./del_member.js";

const groupCommand = {
  checkGroupExist,
  addGroup,
  getList,
  printList,
  deleteGroup,
  addMember,
  delMember,
};

export default groupCommand;
