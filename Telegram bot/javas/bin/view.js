import TelegramBot from "node-telegram-bot-api";
const log = console.log;

export class Telegram {
    constructor(config) {
        this.config = config;
        this.bot = new TelegramBot(this.config.token, {polling: true});
    }
    start(){
        this.textHandler = this._textHandler.bind(this);
        this.bot.on('text', this.textHandler.bind(this));
    }
    stop(){
        this.bot.off('text', this.textHandler.bind(this));
    }
    textHandler(){

    }
    buttonHandler(){

    }
}