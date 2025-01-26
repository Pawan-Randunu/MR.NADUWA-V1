const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MR-NADUWA=TMA1zB6K#OxZNMK7EeNuE6GwEvVhRQnF15uGXds_SHX45qYg6H8Q",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/iclcf6.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "🤖𝗛𝗘𝗬 𝗜 𝗔𝗠 𝗠𝗥.𝗡𝗔𝗗𝗨𝗪𝗔-𝗩1 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🤖𝙳𝙴𝙿𝙻𝚈 𝙱𝚈 𝙼𝚁.𝙽𝙰𝙳𝚄𝚆𝙰☀",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
 AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*SEEN YOUR STATUS MR.NADUWA 🤍*",

};
