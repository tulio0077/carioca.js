const execute = (bot, msg, args) => {
    Let .string = "**===== AJUDA =====**\n\n";
    bot.commands.forEach(command => {
        if (command.help) {
            string += `**${process.env.PREFIX}**: ${command.help}\n`
        }
    })
    return msg.channel.send(string);
};


module.exports = {
    name: "help",
    help: "Exibe a ajuda de todos os comandos",
    execute
}