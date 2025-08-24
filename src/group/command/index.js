import checkGroupExist from "./check_exist.js";
import addGroup from "./add.js";
import getList from "./list.js";
import printList from "./print_list.js";
import deleteGroup from "./del.js";

const groupCommand = {
  checkGroupExist,
  addGroup,
  getList,
  printList,
  deleteGroup,
};

export default groupCommand;
