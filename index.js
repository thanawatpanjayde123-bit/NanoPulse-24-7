require('dotenv').config();

const express = require("express");
const app = express();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// 🌐 เว็บไว้ให้ UptimeRobot ping
app.get("/", (req, res) => {
  res.send("Bot is alive!");
});

app.listen(3000, () => {
  console.log("Web server ready.");
});

// 🤖 บอท
client.once('ready', () => {
  console.log(`✅ ${client.user.tag} ออนไลน์แล้ว`);
});

client.login(process.env.TOKEN);
