//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')

// Load .env in local development (Render sets environment variables in the Dashboard)
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//--------------------[ SESSION ID ]----------------------//
// Must start with KANGO~ (set as secret in Render Dashboard)
global.SESSION_ID = process.env.SESSION_ID || '' 

//--------------------[ BOT NAME ]----------------------//
global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//
global.ownernumber = process.env.OWNER_NUMBER || '+233509977126' 

//--------------------[ SUDO ]--------------------------//
global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202']
// Type additional allowed users here
// NB: They'll be able to use every function of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//
global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//
global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//
global.timezones = process.env.TIMEZONE || 'Africa/Accra'  // Set this to your timezone

//--------------[ STICKER AUTHOR NAME ]------------//
global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//
global.dbToken = process.env.GITHUB_TOKEN || ""

//-----------------[ CONTEXT LINK ]--------------------//
global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//
global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//
global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//

// Runtime port (Render will provide PORT env). Ensure your app uses process.env.PORT when listening.
global.port = process.env.PORT || 3000
module.exports = {}
