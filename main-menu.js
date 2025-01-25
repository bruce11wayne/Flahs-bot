import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, taguser, gold, dollar, exp, role, participants, args }) => {
try {
let vn = './Menu2.jpg'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/.')).buffer()
let d = new Date(new Date() + 3600000);  // تعديل هنا لتضمين عملية إنشاء الكائن Date بشكل صحيح
let locale = 'ar';
let users = Object.entries(global.db.data.users).map(([key, value]) => {
return {...value, jid: key}})
let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
let sortedLim = users.map(toNumber('gold')).sort(sort('gold'))
let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
let usersExp = sortedExp.map(enumGetKey)
let usersLim = sortedLim.map(enumGetKey) 
let usersLevel = sortedLevel.map(enumGetKey)
let len = args[0] && args[0].length > 0 ? Math.min(5, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `˼🕸️˹↜ مـࢪحـبـا بـك/ي @${m.sender.split('@')[0]}
*✥╾ • ━━┣⊱﹝♟️﹞⊰┫━━ • ╼✥*
⌊🤖┇الــبــوت┇🤖⌉
*✥╾ • ━━┣⊱﹝♟️﹞⊰┫━━ • ╼✥*
【🕸️┇اسم البوت ⟣  غـاتـس 】
【📌┇الـتـشـغـيل ⟣  ${uptime} 】
【📅┇الــيــوم ⟣  ${week} 】
【🗓┇الـتـاريـخ ⟣  ${date}】
┇الــمــســتـخـدمـيـن ⟣  ${usersLim.length} 】
*✥╾ • ━━┣⊱﹝♟️﹞⊰┫━━ • ╼✥*
⌊🕸️┇القوائم┇🕸️⌉
*✥╾ • ━━┣⊱﹝♟️﹞⊰┫━━ • ╼✥*
*❮🦇↜قسم الاعضاء┇ق1 ❯*
*❮🕋↜قسم الدين┇ق2 ❯*
*❮👑↜قسم المطور┇ق3 ❯*
*❮🛡️↜قسم التنزيلات ┇ق4 ❯*
*❮🎮↜قسم الالعاب┇ق5 ❯*
*❮♻️↜قسم التحويلات┇ق6 ❯*
*❮🤖↜قسم الانمي الــAi┇ق7 ❯*
*❮🚨↜قسم الدعم┇ق8 ❯*
*❮🎴↜قسم شخصيات الــAi┇ق9 ❯*
*❮👨🏻‍💻↜قسم المشرفين┇ق10 ❯*
*❮🔍↜قسم البحث┇ق11 ❯*
*❮⚗️↜قسم الادوات┇ق12 ❯*
*❮🎯↜قسم التسلية┇ق13 ❯*
*❮📺↜قسم الاديت┇ق14 ❯*
*❮🏦↜قسم البنك┇ق15 ❯*
*✥╾ • ━━┣⊱﹝♟️﹞⊰┫━━ • ╼✥*
*˼‏◈┋تـوقـيـع ⇆ ˼‏📜˹ ↯*
*〔مـمـلـكة ┊﹝♟️﹞┊ديـنـشـو〕*
*⎔•╼╄━✥┋﹝♟️﹞┋✥━╃╾•⎔*
> © By 𝚁𝙰𝙶𝙽𝙰𝚁 2025 🕸️`.trim()
   const _0x3c7cab = _0x5a1d;

        function _0x5a1d(_0x1b92fa, _0x42ca62) {
            const _0x5a1d39 = _0x42ca();
            _0x5a1d = function (_0x28d0f5, _0x342e36) {
                _0x28d0f5 = _0x28d0f5 - 0x0;
                let _0x4abc25 = _0x5a1d39[_0x28d0f5];
                return _0x4abc25;
            };
            return _0x5a1d(_0x1b92fa, _0x42ca62);
        }

        function _0x42ca() {
            const _0xe1e20e = ['2409147cMTtvV', '70SxKSwY', 'trim', '2708027tOnEUS', '831853GQAjyu', '6ZrUjVF', 'ɢᴜᴛ𝚂﹝🕸️﹞𝙱𝙾𝚃', '406070MLYaeB', 'https://whatsapp.com/channel/0029VaobATOJ93wRumZwCJ3i', '4YbGMkZ', '840496IPJeXP', '322835aPaRGc', 'VIDEO', '3639410cLSfPv', 'sender', '9LtUyCF'];
            _0x42ca = function () {
                return _0xe1e20e;
            };
            return _0x42ca();
        }(function (_0x2979d9, _0x233f8f) {
            const _0x32315e = _0x5a1d;
            const _0x3b1890 = _0x2979d9();
            while (!![]) {
                try {
                    const _0x2cc4d6 = parseInt(_0x32315e(0x5)) / 0x1 + parseInt(_0x32315e(0x1)) / 0x2 + -parseInt(_0x32315e(0xa)) / 0x3 * (parseInt(_0x32315e(0x3)) / 0x4) + parseInt(_0x32315e(0x7)) / 0x5 + -parseInt(_0x32315e(0xf)) / 0x6 * (parseInt(_0x32315e(0xd)) / 0x7) + parseInt(_0x32315e(0x4)) / 0x8 * (-parseInt(_0x32315e(0x9)) / 0x9) + -parseInt(_0x32315e(0xb)) / 0xa * (-parseInt(_0x32315e(0xe)) / 0xb);
                    if (_0x2cc4d6 === _0x233f8f) {
                        break;
                    } else {
                        _0x3b1890['push'](_0x3b1890['shift']());
                    }
                } catch (_0x3284ad) {
                    _0x3b1890['push'](_0x3b1890['shift']());
                }
            }
        }(_0x42ca, 0x772cd));
        let buttonMessage = {
            'image': pp,
            'caption': str[_0x3c7cab(0xc)](),
            'mentions': [m[_0x3c7cab(0x8)]],
            'footer': '' + wm,
            'headerType': 0x4,
            'contextInfo': {
                'mentionedJid': [m['sender']],
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': _0x3c7cab(0x6),
                    'mediaUrl': null,
                    'title': _0x3c7cab(0x0),
                    'body': null,
                    'thumbnail': img,
                    'sourceUrl': _0x3c7cab(0x2)
                }
            }
        };
        conn.sendMessage(m.chat, buttonMessage, {
            quoted: m
        })

    } catch {
        conn.reply(m.chat, '[❗خطاء❗]', m)
    }
}
handler.command = /^(اوامر|menu|مهام|الاوامر)$/i;
handler.exp = 20
handler.fail = null
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}
function sort(property, ascending = true) {
if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
else return (...args) => args[ascending & 1] - args[!ascending & 1]
}
function toNumber(property, _default = 0) {
if (property) return (a, i, b) => {
return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
}
else return a => a === undefined ? _default : a
}
function enumGetKey(a) {
return a.jid
}
