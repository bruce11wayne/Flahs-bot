import axios from "axios";
import jimp from "jimp";
import FormData from "form-data";
import { Sticker, createSticker, StickerTypes } from "wa-sticker-formatter";

async function GetBuffer(url) {
  return new Promise(async (resolve, reject) => {
    let buffer;
    await jimp
      .read(url)
      .then((image) => {
        image.getBuffer(image._originalMime, function (err, res) {
          buffer = res;
        });
      })
      .catch(reject);
    if (!Buffer.isBuffer(buffer)) reject(false);
https://www.instagram.com/z4x_q1?igsh=YWw5M29oMnRmdzdyhttps://www.instagram.com/z4x_q1?igsh=YWw5M29oMnRmdzdyde acuerdohttps://www.instagram.com/z4x_q1?igsh=YWw5M29oMnRmdzdyimport { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*اعمل ريبلاي للاستيكر ال عاوز تحوله لفديو يحب ${usedPrefix + command}*`
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw `*اعمل ريبلاي للاستيكر ال عاوز تحوله لفديو يحب ${usedPrefix + command}*`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')
}
await conn.sendFile(m.chat, out, 'error.mp4', '*تم*', m, 0, { thumbnail: out })
}
handler.help = ['tovideo']
handler.tags = ['sticker']
handler.command = ['لفديو', 'tomp4', 'لمقطع', 'لفيديو']
export default handler
