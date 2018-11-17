import {ExternalStorageDirectoryPath} from "react-native-fs"

const path = ExternalStorageDirectoryPath;
const appDirectory = "{{app_name}}";
const dbName = "db.json";
const assetsDirectory = "assets";

export const appDataPath = `${path}/${appDirectory}`
export const configsDatabase = `${appDataPath}/${dbName}`
export const uploadAssetsDirectory = `${appDataPath}/${assetsDirectory}`