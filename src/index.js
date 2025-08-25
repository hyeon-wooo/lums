#!/usr/bin/env node
import mainInterface from "./main/interface/main.js";

import fs from "fs";

const checkPermission = () => {
  const uid = process.getuid();
  if (uid !== 0) {
    console.error("This program must be run as root");
    return false;
  }

  const mode = fs.statSync(process.execPath).mode & 0o777; // rwxrwxrwx 마스크
  const ownerExec = (mode & 0o100) !== 0; // S_IXUSR
  const groupExec = (mode & 0o010) !== 0; // S_IXGRP
  const otherExec = (mode & 0o001) !== 0; // S_IXOTH
  const isOwnerOnlyExec = ownerExec && !groupExec && !otherExec;

  if (!isOwnerOnlyExec) {
    console.error("Bad permission. Recommend to be 700.");
    return false;
  }

  return true;
};

const canRun = checkPermission();
if (!canRun) process.exit(1);

mainInterface();
