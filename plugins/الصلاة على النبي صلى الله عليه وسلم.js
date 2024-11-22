
const dir = [
'https://telegra.ph/file/219c53b8c75fac183aeb2.mp4',
'https://telegra.ph/file/4ca69eeb71ba86ecb7e9b.mp4',
'https://telegra.ph/file/b0fbcbecd3bd098c9422d.mp4',
'https://telegra.ph/file/06e8d55d11ed48016508f.mp4',
'https://telegra.ph/file/9dbc6a1ed29f7fff57300.mp4',
'https://telegra.ph/file/b8e310095dfc1e5b68b4e.mp4',
'https://telegra.ph/file/39bab95866c51d6cea5c7.mp4',
'https://telegra.ph/file/c248a097bfaa0a1f3f04c.mp4',
'https://telegra.ph/file/d207a1d1095a22da57c73.mp4',
'https://telegra.ph/file/6b4998dc8a648bbfc50f2.mp4',
'https://telegra.ph/file/d3f0ee7a2b9ebd83dfef9.mp4',
'https://telegra.ph/file/d5527ad922ecde04411a4.mp4',
'https://telegra.ph/file/322fd42c958aa1f1ba9cf.mp4',
'https://telegra.ph/file/0ab3dca6f08519bbefd94.mp4',
'https://telegra.ph/file/8bc14fc72aba99ece1ec1.mp4', 
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['الصلاة'] 

export default handler
