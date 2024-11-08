let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = '*مـوجـودة لا تـخـاف اكـتـب(.اوامر)*';
await conn.sendMessage(m.chat, { react: { text: '😶‍🌫️', key: m.key } })
    conn.sendFile(m.chat, 'https://qu.ax/dnRWN.mp4', 'menu.mp3', message, m);
};

handler.customPrefix = /^تست$/i;
handler.command = new RegExp;

export default handler;
