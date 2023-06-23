import { Application } from "./bin/app.js";
import fs from "fs";
import ini from 'ini';

const cfg_file = fs.readFileSync("./config.ini", 'utf-8');
const config = ini.parse(cfg_file);

const app = new Application(config);
app.start();

// import TelegramBot from "node-telegram-bot-api";
// import {Database} from "sqlite-async";
// const log = console.log;

// const db = await Database.open('./data.sql3');

// let query = `CREATE TABLE IF NOT EXISTS Users (
//     id integer primary key autoincrement,
//     name text unique not null,
//     nickname text,
//     birthday text
// )`;

// await db.exec(query);

// query = `INSERT INTO Users(name, nickname, birthday) VALUES (
//     "Askhat", "askhat_is_the_best", "2005-03-05"
// )`;
// try { await db.exec(query); }
// catch { log("Такой пользователь уже есть!"); }

// query = "SELECT * FROM Users";
// let rows = await db.all(query);
// log(rows);

// db.close();

// const TOKEN = "6095485837:AAH0V31L6hA1U6rvu8jOAdWBqRqx58820vI";

// const bot = new TelegramBot(TOKEN, {polling: true});

// let chat_id;

// bot.on("text", msg => {
//     switch(msg.text.toLocaleLowerCase()) {
//         case "/start":
//             chat_id = msg.chat.id;
//             break;
//         case "привет":
//             let response = `И тебе привет, ${msg.from.first_name}!`;
//             bot.sendMessage(msg.chat.id, response);
//         case "меню":
//             response = "Вот тебе меню:";    
//             bot.sendMessage(msg.chat.id, response, {
//                 reply_markup: {
//                     inline_keyboard: [
//                         [{text:"Вправо", callback_data: "ToRight"}],
//                         [{text:"Влево", callback_data: "ToLeft"}],
//                         [{text:"Прямо", callback_data: "Forward"}],
//                     ]
//                 }
//             });
//             break;
//         case "рассказ":
//             response = 'рассказ — произведение прозы маленького объема, лаконично описывающее определенное событие или эпизод из жизни героев. В силу небольшого объема рассказ в большинстве случаев описывает одну сюжетную линию, в которой задействовано небольшое количество действующих лиц.';
//                 bot.sendMessage(msg.chat.id, response, {
//                     parse_mode: "HTML"
//                 })
//     }
// });

// bot.on("callback_query", msg => {
//     log(msg);
// });

// bot.on("sticker", async msg => {
//     // let sticker = await bot.getFile(msg.file_id);
//     // fs.writeFileSync("./sticker.jpg", sticker);
//     log(msg);
// });

// bot.on("photo", msg => {
//     let file_id = msg.photo[msg.photo.length-1].file_id;
//     bot.downloadFile(file_id, './img');
// })