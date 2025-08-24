import fs from "fs";
import { SETTINGS_FILE_PATH } from "../constant.js";

/**
 * 설정 업데이트
 * @param {Partial<Settings>} settings 업데이트할 설정 내용
 * @returns {Settings} 업데이트된 설정 내용
 */
const updateSettings = (settings) => {
  const prev = JSON.parse(
    fs.readFileSync(SETTINGS_FILE_PATH, "utf8").toString()
  );
  const newSettings = Object.assign(prev, settings);

  fs.writeFileSync(SETTINGS_FILE_PATH, JSON.stringify(newSettings, null, 2));

  return newSettings;
};

export default updateSettings;
