const readFileSafe = (path) => {
  try {
    return fs.readFileSync(path, "utf8");
  } catch {
    return "";
  }
};

export default readFileSafe;
