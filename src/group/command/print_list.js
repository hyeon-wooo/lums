import groupCommand from "../command";
import printTable from "../../shared/print_table.js";
import groupListLabel from "../label/list_column.js";

const printList = async (language) => {
  const list = await groupCommand.getList();

  console.log("list: ", list);

  const rows = list.map((row) => {
    const name = row.name ?? "";
    const gid = row.gid ?? "";
    const members = row.members.join(", ");
    return [name, gid, members];
  });

  printTable(groupListLabel[language], rows);
};

export default printList;
