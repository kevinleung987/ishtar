import { Client } from 'discord.js';
import { config } from 'dotenv';
import * as express from 'express';
// Load environment configuration
const dotenv = config();
if (dotenv.error) {
  throw dotenv.error;
}
const PORT = process.env.PORT || 3000;

const client = new Client();

client.on('ready', () => { console.log(`Logged in as ${client.user.tag}!`); });

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(process.env.TOKEN);

express()
.get('/', (req, res) => { res.json({ message: 'nice!' }); })
.listen(PORT, () => console.log(`Listening on ${PORT}`));
