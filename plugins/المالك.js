function handler(m) {
      conn.sendFile(m.chat, 'https://qu.ax/dnRWN.mp4', 'menu.mp3', message, m);
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'مطور', 'المطور', 'المالك'] 

export default handler
