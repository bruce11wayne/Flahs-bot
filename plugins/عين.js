let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
        await conn.sendMessage(m.chat, { react: { text: '🕹️', key: m.key } });
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/luffy716716/12321/main/%D8%B9%D9%8A%D9%86.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*
  ❐↞┇الـوقـت⏳↞ *${(timeout / 1000).toFixed(2)} ┇
  *استخدم .انسحب للأنسحاب*
  ❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇
*『𝚄𝚗𝚘𝚑𝚊𝚗𝚊╵🧭╷𝙱𝙾𝚃』*
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ ${json.name}*┇`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['guessflag']
handler.tags = ['game']
handler.command = /^عين/i

export default handler
