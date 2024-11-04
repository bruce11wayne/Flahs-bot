let handler = async m => m.reply(`

≡  *┋❥𝗥𝗔𝗚𝗡𝗔𝗥-𝗕𝗼𝘁┋*

> 𝗧𝗘𝗖𝗛𝗡𝗜𝗖𝗔𝗟 𝗦𝗨𝗣𝗣𝗢𝗥𝗧:
─────────────
▢ *𝗥𝗔𝗚𝗡𝗔𝗥 𝗖𝗢𝗗𝗘*
> https://wa.me/+966554344908?text=الـسـلام+عـلـيـكـم+هـلا+راغـنـر🦇
─────────────
▢ *𝗥𝗔𝗚𝗡𝗔𝗥 𝗥𝗘𝗖𝗘𝗣𝗧𝗜𝗢𝗡*
> https://chat.whatsapp.com/D8rDe6vGUuX4pwrjxFM1l8
─────────────
▢ *SUPPORT_GROUP_(AR🇸🇦)*
> https://whatsapp.com/channel/0029VafG0N8I1rclRCFLaL0g
`.trim())
handler.help = ['gpflash']
handler.tags = ['main']
handler.command = ['group', 'support','الدعم','دعم']

export default handler
await conn.sendMessage(m.chat, { react: { text: '🚨', key: m.key } })
    conn.sendFile(m.chat, 'https://envs.sh/06H.jpg', 'image.jpg', message, m);
};
