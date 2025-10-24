const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MASTER-IP~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0FFaEJVRUswOVozdWFwaWhKRlNEeEVnc08rQS9hZmJPQ211U0pUSjFWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjBHZ2szRG5aait6T2t3dk8xTVJDajBGSnNGNHRkelA5VVFSTXVrdXV3cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRTFsaituK0xsdkt2S2VZc2FEU1lNRjVyUlVIVmJEbmVQSEdDRjRiOFdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVNFB2bW9ONkNtQ21CQkNSRlY3Mll4VGdQdENGTGJKT3dQT0NYOHBTUkI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJTFl5SklEYmtuOEduQUhWQmZtcHdTdE9wZUNkS0p4a3AxQVNhZDduVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlPS3Rpem1lL2pOYzhDSVl5eVBFRG95T3lnaTRmdGhKcERRQXE4R0dGQWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUROd1JyM1RBQmZQOVZrNFNUeG5nTVBsNlZOQytVSHppN1RPTTNaTnAyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzJnZnlOaE5KU2tKemp5TGwzYkc0NWdYdER2NE9GNzkzSWZlaWpMOWpTVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAwVGdiUmdveWp3NHNNWnRyMCs3aTVQMzVxeDdmSTdycWVrNlIwOGpMLzIwbDFuaktuYWRaMUVub0NYRW8zeDdFcG04YTM1d0lYNFU3dTJ4OTN3cWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6Ikp1Qmo4eEhmNEpvcmVjeVc2NjBnYXZIUkhWRnZTdmp1VW4vcjJISW9QK289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjMxTDZGOFpKIiwibWUiOnsiaWQiOiIyNjM3Nzk1NDAwNTg6MThAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNTQ2NTc4MTI5MzA3MzM6MThAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYS8vMllROWU3c3h3WVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRVi9pUTd5YU5wVk1rWXMrdG5lTmZHUi9DcDA0VUQ2b3JraEYwQUtiUVVjPSIsImFjY291bnRTaWduYXR1cmUiOiJEbnhhblNpMjNYMEhZeUFzL1Y1a09KR3FqTjc3clorTmZqY1FySFJqQnJUaHp0VkZTaXVrWHFEcG5Ma1Y4L3RMbzdjTWhxS0Yvak50TFJUVWZkU21EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN3JTc2htK1AwS2w1VlIxbXU5YnJhbWNxTlRWQkxKMEdjMjNMWTlrQmxPMmxWWlFSWTdQTnBDNnNaNjhJR2lnQjRWVlZDRGhFcVhvaWhuNnUwTnVIakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3Nzk1NDAwNTg6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUZmNGtPOG1qYVZUSkdMUHJaM2pYeGtmd3FkT0ZBK3FLNUlSZEFDbTBGSCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxMjk0MjA5LCJsYXN0UHJvcEhhc2giOiIyRzRBbXUifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MASTER-IP_MD🇿🇼*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/h48dlj.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "MASTER-IP_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "MASTER-IP_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263779540058",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*MASTER-IP🇿🇼*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀꜱᴛᴇʀ-ɪᴘ_ᴍᴅ🇿🇼*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/h48dlj.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> 📊 bro I'm alive and working⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "263779540058",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
