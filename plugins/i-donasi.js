let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Tri [08975217200]
│ • Gopay  [-]
│ • Dana  [08975217200]
│ • Instagram  [https://instagram.com/wnd.prfct]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/628975217200
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler