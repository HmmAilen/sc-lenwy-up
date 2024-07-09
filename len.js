const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.grup = 'https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u'
global.ig = '-'
global.thumb = fs.readFileSync("./data/image/thumb.jpg")
global.email = 'Fake01@gmail.com'
global.region = 'Indonesia'

global.owner = ['6283829814737']
global.ownername = 'Lenwy'

global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'

global.domain = '-'
global.apikey = '-' // Plta
global.capikey = '-' // Pltc
global.eggsnya = '15'
global.location = '1'

global.lenwymenu = 'LenwyORI'
global.botname = 'Lenwy'
global.packname = 'Lenwy'
global.author = `YouTube: Lenwy\nBot: 0856-2497-5232`
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Lenwy'
global.anticall = true

global.mess = {
    success: '☘️ *Selesai*',
    admin: '⚠️ *Fitur Khusus Admin Group!*',
    botAdmin: '⚠️ *Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group!*',
    owner: '⚠️ *Fitur Khusus Owner!*',
    prem: '⚠️ *Fitur Khusus Premium!*',
    group: '⚠️ *Fitur Ini Hanya Bisa Digunakan Di Group Chat!*',
    wait: '📦 *Dalam Proses*',
    error: '⚠️ *Kayaknya Ada Error, Coba Lagi Di Lain Waktu*',
    link: '⚠️ *Itu Bukan Link Yang Benar*',
    
    // Fitur Store & Report
    owner2: '6283829814737',
    qris: 'https://telegra.ph/file/41993d781e2d608315cc1.jpg',
    format: '🎁 *Pembayaran*\n📣 *All Payment Bisa Scan Qr Diatas*\n\n📃 *Metode Lain*\n🏷️ *Ovo : 62-*\n🏷️ *Dana : 62-*\n🏷️ *Gopay : 62-*\n\n⚠️ *Dimohon Untuk Mengirim Bukti Pembayaran*\n\n❤️ *Terimakasih*',
}

global.limitawal = {
    free: 50
}

global.multiplier = 1000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green(`📑  Update : ${__filename}`))
delete require.cache[file]
require(file)
})