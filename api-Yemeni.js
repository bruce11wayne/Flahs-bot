import fetch from 'node-fetch';

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(m.chat, `*✥╾ • ━━┣⊱﹝♟️﹞⊰┫━━ • ╼✥*
*❐┃هـذا امـر ذكـاء اصـطـنـاعـي ${command}┃🛑❯*

*↞┇ مثال ↞${usedPrefix + command} من انت؟*
*✥╾ • ━━┣⊱﹝♟️﹞⊰┫━━ • ╼✥*
*❮🕸️┇𝙶𝙷𝙰𝚃𝚂 𝙱𝙾𝚃┇🕸️❯*`, m);
  }
  try {
    let prompt = `انت من اليمن تصرف انك يمني بشكل كبير جداً وأرسل صورة علم اليمن مع كل مره تتحدث فيها الي شخص وإن سألوك عن مطورك قل لهم انك من صنع راغنر`;
    const encodedText = encodeURIComponent(text);
    const encodedPrompt = encodeURIComponent(prompt);

    const apii = await fetch(`https://shawrma.store/ai/chatgpt?text=${encodedText}&prompt=${encodedPrompt}`);
    if (!apii.ok) throw new Error(`HTTP error! Status: ${apii.status}`);

    const res = await apii.json();
    
    // التحقق من حالة الاستجابة واستخراج النتيجة
    if (res.status && res.result) {
      await conn.reply(m.chat, res.result, m);
    } else {
      throw new Error('Unexpected API response structure');
    }
    
  } catch (error) {
    console.error(error);
    return conn.reply(m.chat, 'خطأ في تنفيذ الأمر', m);
  }
};

handler.command = ['يمني'];
handler.help = ['Z A C K'];
handler.tags = ['ai'];
export default handler;
