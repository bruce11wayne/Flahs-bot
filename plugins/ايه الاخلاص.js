import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 آية الإخلاص 」*
قُلۡ هُوَ ٱللَّهُ أَحَدٌ (1) ٱللَّهُ ٱلصَّمَدُ (2) لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ (3) وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ (4)

`.trim()
  m.reply(caption)
}
handler.help = ['ayatkursi']
handler.tags = ['quran']
handler.command = /^(اية_الإخلاص)$/i


export default handler
