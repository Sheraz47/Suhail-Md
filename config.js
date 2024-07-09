const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "27769044652";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_31_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcxLFxuICAgICAgICAwLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICA3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDUxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDYxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAxLFxuICAgICAgICAyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MixcbiAgICAgICAgODAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNiTDNadXFNZnZKQm1ZY0g0MmpPYjRjU1JSdFNMKzJCZnBJS0lUZ3hNQnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBRTjQ2N0VkU3lPVS1UMzlscE9nZVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzQ0MGFjNmItMTZkNi00Y2E4LThmYmEtOTQ5NTJlZDhhNjYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgNDQsXG4gICAgICAxNTksXG4gICAgICAxNTAsXG4gICAgICAyMjUsXG4gICAgICAxOTYsXG4gICAgICAxNDcsXG4gICAgICAxMDcsXG4gICAgICAyMjUsXG4gICAgICAyMTgsXG4gICAgICAxNjgsXG4gICAgICA4MCxcbiAgICAgIDIwNyxcbiAgICAgIDM1LFxuICAgICAgMTI0LFxuICAgICAgNTQsXG4gICAgICA1MyxcbiAgICAgIDYxLFxuICAgICAgMTE0LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgMTA4LFxuICAgICAgMTcxLFxuICAgICAgMTY4LFxuICAgICAgMjUxLFxuICAgICAgMTExLFxuICAgICAgMTM3LFxuICAgICAgOTUsXG4gICAgICAxODQsXG4gICAgICAxNDYsXG4gICAgICA3OCxcbiAgICAgIDE5LFxuICAgICAgMzUsXG4gICAgICAxNTMsXG4gICAgICAxNzgsXG4gICAgICAyMjcsXG4gICAgICA3OSxcbiAgICAgIDIwNCxcbiAgICAgIDI0MSxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkdtLzNJUTJxSzB0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrTnpqcFBvUHZZYkhSQ0k1d3lWelJMRnRTN25najVMMkVkY2ZneENxUkVjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFpanY1UXFwUkpNUHl3QlMzeld2NC9CZVFSbnk1a3NzaHQxaVlLRHRQMVRQS1FTZlZscUx3eWZUM05mYkNFUGdiMUVmbSszZldrZW1GMjI3azhGV0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRBamVqVk1Td1UrK05jREJFVnE5b2hIS1hTdFZTR3ZVVDNmTlFrZG5LN1J0OUFMY3F1T3hFWDlIVkVyQ3h3Y3ZmTVRJZ0pSYlhIY01pMmtidnpHNERBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDU3NTgxNzIyOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MDAzNjg3MjMxNTg3OjM4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDU3NTgxNzIyOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTIxMDUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWVaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZVouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTNytuM1JUMXhCZ2xza283QWRyUEJXVUI3Z3ljMWM0czVubWZrcjVwZDg4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0MTE2MDk3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWVhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ0MySm5UcC9FSS9oRS9NQlR2eDJvTVhRV05odnNzbGpyUVVpRlFSZ0F6bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNDExNjA5NzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1MjA3MzE4MTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
