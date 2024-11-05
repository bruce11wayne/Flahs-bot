let handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '🧭', key: m.key } });    
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `> استقبال المطور راغنر حياكم 🫶🏻🧣
> *https://chat.whatsapp.com/D8rDe6vGUuX4pwrjxFM1l8*`;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/960bece94cac521c5fd68.mp4', 'video.mp4', message, m);
};

handler.customPrefix = /^(استقبال|مطور|الاستقبال|L|I|i|l)$/i;
handler.command = new RegExp;

export default handler;
