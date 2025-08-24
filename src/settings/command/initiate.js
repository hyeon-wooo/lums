import fs from "fs";
import { SETTINGS_FILE_PATH, SETTINGS_FILE_DIR } from "../constant.js";

/**
 * 설정 초기화
 * @returns {Settings} 초기화된 설정 내용
 */
const initiateSettings = () => {
  if (!fs.existsSync(SETTINGS_FILE_DIR)) fs.mkdirSync(SETTINGS_FILE_DIR);

  const initialSettings = {
    language: "en",
    loggingCommand: false, // 명령어 실행 로깅 여부
  };

  fs.writeFileSync(
    SETTINGS_FILE_PATH,
    JSON.stringify(initialSettings, null, 2)
  );

  return initialSettings;
};

export default initiateSettings;
