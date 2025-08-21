#!/usr/bin/env node
import mainInterface from "./main/interface/main";

const settings = {
  language: "ko",
};

const initialize = () => {
  // 설정파일 존재여부 확인
  // 존재하지 않으면 생성
  // 존재하면 로드
  // 전역변수에 설정 내용 저장
};

initialize();
mainInterface(settings.language);
