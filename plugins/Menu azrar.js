import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://qu.ax/LlqeY.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `*⌬∙ • ──╾⊱﹝﷽﹞⊰╼── • ∙⌬*

*❮ ◈┇قائمة اوامر┇𝚄𝙽𝙾𝙷𝙰𝙽𝙰◈❯*
*❮ ◈┇عيون اونوهانا يا ↜ ${taguser}  ❯*
*⌬∙ • ──╾⊱﹝🔆﹞⊰╼── • ∙⌬*
> ˼🪪˹↜ مــعــلــومــاتــك ↶
╮───────────────────⟢ـ
┆⚡↜ بـريـمـيـوم↞⌊ ${user.premiumTime > 0 ? 'مــمـ🔱ـيز' : (isPrems ? 'مــمـ🔱ـيز' : 'عــ🍁ــادي') || ''} ⌉
┆⚜️↜ مـــســـتواك↞⌊ ${level} ⌉
┆💫↜ رتـبـتـك↞⌊ ${role} ⌉
┆🧰↜ الـخـبـرة↞⌊ ${exp} ⌉
┆💎↜ الـمـاس↞⌊ ${limit} ⌉
╯───────────────────⟢ـ
> ˼🔆˹↜مـعـلـومات الــبــوت↶
╮───────────────────⟢ـ
┆⚙️ ↜اسـم الـبـوت ↶﹝𝐔𝐧𝐨𝐡𝐚𝐧𝐚﹞
┆🪄 ↜الـمـطـوريـن ↶﹝𝙱𝚁𝚄𝙲𝙴 & 𝚂𝚙𝚎𝚎𝚍𝚢﹞
┆📌 ↜الـتـشـغـيـل ↶﹝${uptime}﹞
┆🔖 ↜الــمــســتـخـدمـيـن ↶﹝${rtotalreg}﹞
╯───────────────────⟢ـ
> ˼🍷˹↜مـجـمـوعـات الـمـطـور↶
╮───────────────────⟢ـ
┆🕋 ↜قـنـاة الـمـطـور الـديـنـيه ↶ ﹝ https://whatsapp.com/channel/0029VaobATOJ93wRumZwCJ3i ﹞
┆🧣 ↜قـنـاة الــبــوت ↶ ﹝ https://whatsapp.com/channel/0029VafG0N8I1rclRCFLaL0g ﹞

╯───────────────────⟢ـ
*⌬∙ • ──╾⊱﹝🔆﹞⊰╼── • ∙⌬*
*🧭┋𝚄𝙽𝙾𝙷𝙰𝙽𝙰_𝙱𝙾𝚃┋🧭*
*⌬∙ • ──╾⊱﹝🔆﹞⊰╼── • ∙⌬*
*「قـســم╎🧭╎القـروبــات」*

*◞🧭◜╎.ابلاغ 』*
*◞🧭◜╎.منشن 』*
*◞🧭◜╎.مخفي 』*
*◞🧭◜╎.المشرفين 』*
*◞🧭◜╎.تدوير 』*
*◞🧭◜╎.جروب قفل 』*
*◞🧭◜╎.جروب فتح 』*
*◞🧭◜╎.توب 』*
*◞🧭◜╎.لفل 』*
*◞🧭◜╎.انمي 』*
*◞🧭◜╎.مستخدم 』*
*◞🧭◜╎.رونالدو 』*
*◞🧭◜╎.ميسي 』*
*⌬∙ • ──╾⊱﹝🔆﹞⊰╼── • ∙⌬*
*「قـسـم╎🍷╎الـمـشـرفـيـن」*

*◞🍷◜╎.طرد 』*
*◞🍷◜╎.ترقيه 』*
*◞🍷◜╎.اعفاء 』*
*◞🍷◜╎.حذف 』*
*◞🍷◜╎.تسجيل 』*
*◞🍷◜╎.حذف_لقب 』*
*◞🍷◜╎.لقبه 』*
*◞🍷◜╎.لقب 』*
*◞🍷◜╎.الالقاب 』*
*⌬∙ • ──╾⊱﹝🔆﹞⊰╼── • ∙⌬*
*「قـسـم╎🕋╎الـديــن」*

*◞🕋◜╎.الله 』*
*◞🕋◜╎.حديث 』*
*◞🕋◜╎.ايات 』*
*◞🕋◜╎.اذكار المساء 』*
*◞🕋◜╎.اذكار الصباح 』*
*◞🕋◜╎.أية_الكرسي 』*
*◞🕋◜╎.أية_الإخلاص 』*
*◞🕋◜╎.نصيحه 』*
*◞🕋◜╎.فيديو_قران 』*
*◞🕋◜╎.الصلاة 』*
*⌬∙ • ──╾⊱﹝🔆﹞⊰╼── • ∙⌬*
*「قـسـم╎🎮╎التـرفـيـه」*

*◞🎮◜╎.اكس او 』*
*◞🎮◜╎.كت 』*
*◞🎮◜╎.ذكاء 』*
*◞🎮◜╎.غباء 』*
*◞🎮◜╎.جمال 』*
*◞🎮◜╎.الحب 』*
*◞🎮◜╎.لو 』*
*◞🎮◜╎.هل 』*
*◞🎮◜╎.ترجمه 』*
*◞🎮◜╎.اديت-سيارات 』*
*◞🎮◜╎.اديت 』*
*◞🎮◜╎.اديت2 』*
*◞🎮◜╎.زواج 』*
*◞🎮◜╎.طلاق 』*
*◞🎮◜╎.حروف 』*
*◞🎮◜╎.علم 』*
*◞🎮◜╎.تاج 』*
*◞🎮◜╎.حكمه 』*
*◞🎮◜╎.ميمز 』*
*◞🎮◜╎.سؤال 』*
*◞🎮◜╎.قلب 』*
*◞🎮◜╎.احزر 』*
*◞🎮◜╎.عين 』*
*⌬∙ • ──╾⊱﹝🔆﹞⊰╼── • ∙⌬*
*「قـسـم╎📲╎التـنـزيـلات」*

*◞📲◜╎.ويكيبيديا 』*
*◞📲◜╎.شغل 』*
*◞📲◜╎.Play 』*
*◞📲◜╎.Play2 』*
*◞📲◜╎.اسم_الاغنية 』*
*◞📲◜╎.صوره 』*
*◞📲◜╎.خلفيات 』*
*◞📲◜╎.تطبيق 』*
*◞📲◜╎.بحث 』*
*◞📲◜╎.بين』*
*⌬∙ • ──╾⊱﹝🔆﹞⊰╼── • ∙⌬*
*「قـسـم╎🌀╎التـحـويـلات」*

*◞🌀◜╎.ملصق 』*
*◞🌀◜╎.سرقة 』*
*◞🌀◜╎.تليجراف 』*
*◞🌀◜╎.باركود 』*
*◞🌀◜╎.تصميم 』*
*◞🌀◜╎.زخرفه 』*
*◞🌀◜╎.خط 』*
*⌬∙ • ──╾⊱﹝🔆﹞⊰╼── • ∙⌬*
*🧭┋𝚄𝙽𝙾𝙷𝙰𝙽𝙰_𝙱𝙾𝚃┋🧭*
*⌬∙ • ──╾⊱﹝🔆﹞⊰╼── • ∙⌬*
┆🕋 ↜قـنـاة الـمـطـور الـديـنـيه ↶ ﹝ https://whatsapp.com/channel/0029VaobATOJ93wRumZwCJ3i ﹞

┆🧣 ↜قـنـاة الــبــوت ↶ ﹝ https://whatsapp.com/channel/0029VafG0N8I1rclRCFLaL0g ﹞
*⌬∙ • ──╾⊱﹝🔆﹞⊰╼── • ∙⌬*
*˼‏◈┋تـوقـيـع ⇆ ˼‏📜˹ ↯*
> *𝙱𝚈┋𝚄𝙽𝙾𝙷𝙰𝙽𝙰 ☞ 𝙱𝙾𝚃┋🧭*
> *© 𝙱𝚁𝚄𝙲𝙴 & 𝚂𝚙𝚎𝚎𝚍𝚢 2025*
*⌬┣━ ╼╾ •✥┋﹝🔆﹞┋✥• ╼╾ ━┫⌬* 
 
  
`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['اوامر'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
    }
