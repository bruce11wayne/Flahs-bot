const dir = [
'https://telegra.ph/file/c965c464482cb06630e5b.mp4',
'https://telegra.ph/file/2029fb5e40eda2a28efd1.mp4',
'https://telegra.ph/file/9d7dec1cea4f8c77ac625.mp4',
'https://telegra.ph/file/e4f7731c372f3af4bd3c4.mp4',
'https://telegra.ph/file/a00bfeb2beda400471cda.mp4',
'https://telegra.ph/file/8c676b7f98f4074719e95.mp4',
'https://telegra.ph/file/205ace4a0c76768b03718.mp4',
'https://telegra.ph/file/0aa4f64dc7fc5b08a45ea.mp4',
'https://telegra.ph/file/065cdea6654438315efff.mp4',
'https://telegra.ph/file/9ed6793c15814011db5c9.mp4',
'https://telegra.ph/file/1f58abd07c1f68b99e44d.mp4',
'https://telegra.ph/file/5385803193a2251068a2c.mp4',
'https://telegra.ph/file/251aaac5f4ac5d4447923.mp4',
'https://telegra.ph/file/5a916cc71f703cd76250c.mp4',
'https://telegra.ph/file/d538a35645d8f0715d2b4.mp4',
'https://telegra.ph/file/1a422e51ce906d331f769.mp4',
'https://telegra.ph/file/51ba8cac35a197a9c68c3.mp4',
'https://telegra.ph/file/58c8da4f6a58d4ddd6757.mp4',
'https://telegra.ph/file/0169dd3969454b841678d.mp4',
'https://telegra.ph/file/f82d41898a10df5ff2efc.mp4',
'https://telegra.ph/file/30e9bdc31f2e67f98a4eb.mp4',
'https://telegra.ph/file/e8562ae8317f93490e807.mp4',
'https://telegra.ph/file/ae9cdf7be02d8dfcb99ba.mp4',
'https://telegra.ph/file/c36ad1a12d444614288a2.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['نصيحه'] 

export default handler
