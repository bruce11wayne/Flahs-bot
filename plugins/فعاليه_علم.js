//قناه بورش
//https://whatsapp.com/channel/0029VaQ12JyLY6d1PdN5r93a
let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
        await conn.sendMessage(m.chat, { react: { text: '🕹️', key: m.key } });
    conn.tokitoki = conn.tokitoki ? conn.tokitoki : {}
    let id = m.chat
    if (id in conn.tokitoki) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tokitoki[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/ze819/game/master/src/game.js/luffy1.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*\n *•┇❖↞استخدم انسحب للانسحاب┇🇸🇦❯*
 *•┃❖↞الـوقـت⏳↞* *${(timeout / 1000).toFixed(2)}* *ثانية┇❯*
  
 *•┃❖↞الـجـائـزة💰↞* *${poin}* *نقطه┇❯*
 *『𝚄𝚗𝚘𝚑𝚊𝚗𝚊╵🧭╷𝙱𝙾𝚃』* 
     `.trim()
    conn.tokitoki[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tokitoki[id]) conn.reply(m.chat, `*❮ ⌛┇انتــهــى الــوقــت┇⌛❯*\n*❖↞┇الاجـابـة✅↞*  *${json.name}* *┇❯*`, conn.tokitoki[id][0])
            delete conn.tokitoki[id]
        }, timeout)
    ]
}
handler.help = ['guesseye']
handler.tags = ['game']
handler.command = /^علم$/i

export default handler
