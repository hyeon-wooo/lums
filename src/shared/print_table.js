import stringWidth from "string-width";

const printTable = (header, rows) => {
  // 각 컬럼의 표시 폭 계산 (헤더/데이터 중 최대 표시 폭, 최소 폭 보장)
  const colWidths = header.map(([label, minWidth], i) => {
    const dataMax = rows.reduce((max, row) => {
      const w = stringWidth(String(row[i] ?? ""));
      return w > max ? w : max;
    }, 0);
    return Math.max(stringWidth(label), dataMax, minWidth);
  });

  const sep = "+" + colWidths.map((w) => "-".repeat(w + 2)).join("+") + "+";
  const formatLine = (cols) =>
    "|" +
    cols
      .map((c, i) => {
        const cell = String(c);
        const pad = colWidths[i] - stringWidth(cell);
        return ` ${cell}${" ".repeat(pad)} `;
      })
      .join("|") +
    "|";

  console.log(sep);
  console.log(formatLine(header.map(([label]) => label)));
  console.log(sep);
  rows.forEach((r) => console.log(formatLine(r)));
  console.log(sep);
  console.log("Total: ", rows.length);
  console.log("\n");
};

export default printTable;
