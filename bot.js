﻿﻿const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "%";\\ كرافكس

client.on("message", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        if(!message.channel.guild) return;
            var args = message.content.split(" ").slice(1).join(" ");
            if(command == "bc") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.memberCount} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.forEach(member => {
                                            let bc = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bc);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
            if(command == "bco") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.filter(r => r.presence.status !== "offline").size} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.filter(r => r.presence.status !== "offline").forEach(member => {
                                            let bco = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bco);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
});

client.on("message", message => {
    var prefix = "%";\\كرافكس
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bcs') {
        if (!args[1]) {
    message.channel.send("**bcs <message> **");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });

client.on("message", async message => {
    if(message.content.startsWith(prefix + "help")) {
        let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`╔════════════════════════════════════╗
			║             :radio: :microphone2: ***__بـــوت اعــلانــات ${message.guild.name}__***:radio: :microphone2: 
			║
			║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			║                                   :shield: **__اوامـــــــر بــــوت__**:shield: 
			║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			║ 
			║**
			║1-${prefix}bc ⟹ برودكاست كــل باســمــك +صــورتك
			║
			║2-${prefix}bco ⟹ برودكاست وان الايـــن فــقــط
			║
			║3-${prefix}bcs ⟹ برودكاست بــدون اســمــك ولا صــور 
			║**
			╚════════════════════════════════════╝`);
            message.channel.sendEmbed(help); 
    }
});

const adminprefix = "%";\\كرافكس
const devs = ['اى دى حقك','اى جى شخص اخرى']
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'setgame')) {\\ امر تغير حاله بلانيق
  client.user.setGame(argresult);
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر بـلانـيـق الـى:large_blue_circle:**`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {\\امر تغير اسم بوت
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر اســم الـى**:pencil:`)
return message.reply("**لايـمـكـن تـغـيـر اسـم الان نـتـظـار سـاعـتـان**:stopwatch: ");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {\\تمر تغير صور بوت
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**__${argresult}__تــم تــغـيــر صــور الـى :camera_with_flash:**`);
      } else    
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");امر تغير حاله 
    message.channel.sendMessage(`**__${argresult}__ تــم تـغــيــر حــالـه الــى :red_circle:**`)
}
});

client.on("message", async message => {
    if(message.content.startsWith(prefix + "Ex")) {\\الامر قائمه تغير
        let Ex = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**__اوامـــر تــغـيـر احـلات بـوت + صـور + اسـم__**
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			***
			1-${prefix}setgame = الى تـغـيـر حـالـه الـى بـلانـيـق [ :large_blue_circle: ]
			
			2-${prefix}setT = الـى تـغـيـر حـالـه الــى تـويـتـش [ :red_circle: ]
			
			3-${prefix}setavatar = الـى تـغـيـر صـور [ :camera_with_flash: ]
			
			4-${prefix}setname = الـى تـغـيـر اسـم [ :pencil: ]
			***
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			||*** </>~~Me Codes © ***||
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`);
            message.channel.sendEmbed(Ex);
    }
});

client.login(process.env.BOT_TOKEN);