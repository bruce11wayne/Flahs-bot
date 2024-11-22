const dir = [
'https://telegra.ph/file/35be81bffb543ff6839d1.mp4',
'https://telegra.ph/file/eb92a3e8eb43e7d6f4f54.mp4',
'https://telegra.ph/file/5c2b1c27d972b4deb8b3d.mp4',
'https://telegra.ph/file/dffd1106ff0e83c2f7d03.mp4',
'https://telegra.ph/file/3de2813762e1be3df643d.mp4',
'https://telegra.ph/file/3e8b8b803f78046520589.mp4',
'https://telegra.ph/file/9fe698e9fe2ef19755306.mp4',
'https://telegra.ph/file/3c6ad7810ebea6fd2c872.mp4',
'https://telegra.ph/file/df4fe3e593bf19078c486.mp4',
'https://telegra.ph/file/127cddb24e4573bbb92aa.mp4',
'https://telegra.ph/file/cdd34e7143c7aad75fbde.mp4',
'https://telegra.ph/file/04c48161c3e05e7ba9df1.mp4',
'https://telegra.ph/file/3499fdb9779b5a7f15bf3.mp4',
'https://telegra.ph/file/6240b4e14f8a3d730e0d5.mp4',
'https://telegra.ph/file/dbbb685f1d2a647b6cf9a.mp4',
'https://telegra.ph/file/b9706fb6a0533a360ef96.mp4',
'https://telegra.ph/file/2163f64e99a9ddddf6b2d.mp4',
'https://telegra.ph/file/2ed832b40b1fc08106c9b.mp4',
'https://telegra.ph/file/ca494e4816708f720545a.mp4',
'https://telegra.ph/file/ff0fccab368b08d360fac.mp4',
'https://telegra.ph/file/66dc43e939cf744854445.mp4',
'https://telegra.ph/file/d72093cfc3883a93b2118.mp4',
'https://telegra.ph/file/4019aa3159dc03e52fcb2.mp4',
'https://telegra.ph/file/e0cf4f7c0be707222374c.mp4',
'https://telegra.ph/file/3c4c98d23bf3d9a6ff34b.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['فيديو_قران'] 

export default handler
