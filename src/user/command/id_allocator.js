import fs from "fs";

const readFileSafe = (path) => {
  try {
    return fs.readFileSync(path, "utf8");
  } catch {
    return "";
  }
};

const parseNumber = (v, fallback) => {
  const n = Number(String(v).trim());
  return Number.isFinite(n) ? n : fallback;
};

const parseLoginDefs = () => {
  const content = readFileSafe("/etc/login.defs");
  const cfg = {};
  for (const line of content.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const [key, value] = t.split(/\s+/);
    if (!key || value === undefined) continue;
    if (key === "UID_MIN") cfg.UID_MIN = parseNumber(value, undefined);
    if (key === "UID_MAX") cfg.UID_MAX = parseNumber(value, undefined);
    if (key === "GID_MIN") cfg.GID_MIN = parseNumber(value, undefined);
    if (key === "GID_MAX") cfg.GID_MAX = parseNumber(value, undefined);
  }
  // Sensible defaults for Ubuntu
  if (cfg.UID_MIN === undefined) cfg.UID_MIN = 1000;
  if (cfg.UID_MAX === undefined) cfg.UID_MAX = 60000;
  if (cfg.GID_MIN === undefined) cfg.GID_MIN = 1000;
  if (cfg.GID_MAX === undefined) cfg.GID_MAX = 60000;
  return cfg;
};

const collectUsedUids = () => {
  const content = readFileSafe("/etc/passwd");
  const used = new Set();
  for (const line of content.split(/\r?\n/)) {
    if (!line || line.startsWith("#")) continue;
    const parts = line.split(":");
    if (parts.length < 4) continue;
    const uid = parseNumber(parts[2], NaN);
    if (Number.isFinite(uid)) used.add(uid);
  }
  return used;
};

const collectUsedGids = () => {
  const content = readFileSafe("/etc/group");
  const used = new Set();
  for (const line of content.split(/\r?\n/)) {
    if (!line || line.startsWith("#")) continue;
    const parts = line.split(":");
    if (parts.length < 3) continue;
    const gid = parseNumber(parts[2], NaN);
    if (Number.isFinite(gid)) used.add(gid);
  }
  return used;
};

const findNextFree = (min, max, usedSet) => {
  for (let id = min; id <= max; id += 1) {
    if (!usedSet.has(id)) return id;
  }
  return null;
};

export const getNextUid = () => {
  const { UID_MIN, UID_MAX } = parseLoginDefs();
  const used = collectUsedUids();
  return findNextFree(UID_MIN, UID_MAX, used);
};

export const getNextGid = () => {
  const { GID_MIN, GID_MAX } = parseLoginDefs();
  const used = collectUsedGids();
  return findNextFree(GID_MIN, GID_MAX, used);
};

export default { getNextUid, getNextGid };
