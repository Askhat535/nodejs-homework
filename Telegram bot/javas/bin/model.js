import { Database as DB } from "sqlite-async";
const log = console.log;

export class Database {
    db = null;
    constructor(config) {
        this.config = config;
    }
    async start(){
        this.db = await DB.open(this.config.file);
        await this.createUsers();
        await this.createEvents();
    }
    async stop(){
        await this.db.close();
    }
    async createUsers(){
        let query = `CREATE TABLE IF NOT EXISTS Users (
            id              integer primary key autoincrement,
            telegram_id     integer unique not null,
            telegram_url    integer unique not null,
            chat_id text    integer unique not null,
            name            text
        )`;
        await this.db.exec(query);
    }
    async createEvents(){
        let query = `CREATE TABLE IF NOT EXISTS Events (
            id              integer primary key autoincrement,
            name            text unique not null,
            city            text unique not null,
            address         text,
            date            text unique not null,
            time            text,
            type            text,
            isRegular       integer,
            price           text,
            contact         text,
            org_id          integer not null,
            poster_url      text
        )`;
        await this.db.exec(query);
    }

    async test() {
        this.addUser(9273497, 7847043, "Askhat");
        let query = `INSERT INTO Users(name, telegram_id, chat_id) VALUES (
            "Askhat", 938479834, 23476340
        )`;
        try { await this.db.exec(query); }
        catch { log("Такой пользователь уже есть!"); }

        query = `INSERT INTO Events(name, city, date, org_id) VALUES (
            "Концерт AC/DC", "Алматы", "2023-06-17", 1
        )`;
        try { await this.db.exec(query); }
        catch { log("Такой событие уже есть!"); }
        
        query = "SELECT * FROM Users";
        let rows = await this.db.all(query);
        log("Юзеры: ",rows);

        query = "SELECT * FROM Events";
        rows = await this.db.all(query);
        log("События: ",rows);
    }
}