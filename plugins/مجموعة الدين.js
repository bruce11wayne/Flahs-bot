let handler = async (m, { conn }) => {
        await conn.sendMessage(m.chat, { react: { text: '🔗', key: m.key } });
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `> وعليكم السلام ورحمة الله وبركاته خش يا اخي ولك الاجر استفد و إفِد
> *https://whatsapp.com/channel/0029VaobATOJ93wRumZwCJ3i*`;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/9fe698e9fe2ef19755306.mp4', 'video.mp4', message, m);
};

handler.customPrefix = /^(السلام عليكم|سلام عليكم|دين|اسلام|إسلام)$/i;
handler.command = new RegExp;

export default handler;
