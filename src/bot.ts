/** Entry Point for Discord Bot */
import { Client } from 'discord.js';
import { config } from 'dotenv';

const dotenv = config();
if (dotenv.error) {
  throw dotenv.error;
}

const bot = new Client();

bot.on('ready', () => { console.log(`Logged in as ${bot.user.tag}!`); });

bot.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

export default bot;
