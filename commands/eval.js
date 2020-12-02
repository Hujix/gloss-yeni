
     

 
 
const Discord = require('discord.js')

// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz
// ali istatsitik kodunu aldın demi ibne görmedimki hiç istatistiklerini yaparım yok lan benim yaptığım projeye geldiğinde
module.exports = {
   name: 'eval',
   run: async(client, message, args) => {
  try {
        let codein = args.join(" ");
        let code = eval(codein);
       if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.MessageEmbed()
        .setAuthor(`AmGloss Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor("#3f007f")// gerek yok aq bu yok sadece bilgilere bakmak için
    //yok la lazım olcak bu kod bana
        .addField(':inbox_tray: Giriş:', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Çıkış', `\`\`\`js\n${code}\n\`\`\``)
        .setFooter("sa", message.author.avatarURL({ dynamic: true }))
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
   }
}