import { getDB } from "../index";

const DB = getDB();

//#region schemas
const USER_SCHEMA = DB.Schema({
  name: String,
  password: String,
  birth: String,
  avatar: String,
  createdAt: String
});
//#endregion schemas

//#region models
const User = DB.model('User', USER_SCHEMA);
//#endregion models

module.exports = {
  User,
};
