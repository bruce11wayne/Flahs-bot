let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = '*ارقـام مـطـوريـنـي لا تـزعـجـوهـم 🍒*';
await conn.sendMessage(m.chat, { react: { text: '🧭', key: m.key } })
    conn.sendFile(m.chat, 'https://qu.ax/dnRWN.mp4', 'menu.mp3', message, m);
};

handler.help = ['main']
handler.tags = ['group']
handler.command = ['المطور'] 

export default handler;
