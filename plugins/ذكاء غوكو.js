// *#Character Ai API Guide Code | تستطيع كتابه اي شخصيه انمي تريدها ✅*
// https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B
import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {

  try {
//بدل لو عايز واكتب اسم شخصيه الانمي الي عاوز تتكلم معاه 👇
    const name = "غوكو";
//اكتب اسم انمي الي تبع شخصيه الانمي الي كتبتها فوق 👇
    const anime = "دراغون بال"; 
    if (!text) {
      return conn.reply(m.chat, `*انا ${name} كيف يمكنني مساعدتك* \n\n*مثال:* .${command} مرحبا`, m);
    }
      
    const response = await fetch(`https://joanimi-apis-for-devs.vercel.app/api/cai/v1?name=${name}&anime=${anime}&text=${text}`);
    const data = await response.json();
    const result = data.result;
    if (!result) {
      return conn.reply(m.chat, 'للاسف لم اجد اجوبه عن سؤالك.', m);
    }
    conn.reply(m.chat, result, m);
  } catch (error) {
    throw error
  }
};

handler.help = ['غوكو'];
handler.tags = ['ai'];
handler.command = /^(غوكو|kohaku)$/i;
export default handler;
