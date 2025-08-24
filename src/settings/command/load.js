import fs from "fs";
import initiateSettings from "./initiate.js";
import { SETTINGS_FILE_PATH } from "../constant.js";

/**
 * 설정 로드
 * @returns {Settings} 설정 내용
 */
const loadSettings = () => {
  let settings = null;
  if (!fs.existsSync(SETTINGS_FILE_PATH)) {
    settings = initiateSettings();
    return settings;
  }

  settings = fs.readFileSync(SETTINGS_FILE_PATH, "utf8");

  return JSON.parse(settings);
};

export default loadSettings;
