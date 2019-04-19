import app from './app';
import bot from './bot';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
bot.login(process.env.TOKEN);
