import TelegramBot from "node-telegram-bot-api";
import {Database} from "sqlite-async";
const log = console.log;

const db = await Database.open('./data.sql3');

let query = `CREATE TABLE IF NOT EXISTS Users (
    id integer primary key autoincrement,
    name text unique not null,
    nickname text,
    birthday text
)`;

await db.exec(query);

query = `INSERT INTO Users(name, nickname, birthday) VALUES (
    "Askhat", "askhat_is_the_best", "2005-03-05"
)`;
try { await db.exec(query); }
catch { log("Такой пользователь уже есть!"); }

query = "SELECT * FROM Users";
let rows = await db.all(query);
log(rows);

db.close();