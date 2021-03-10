const execute = (bot,msg,args) => {
    return msg.reply("Fala meu parceiro");
}

module.exports ={
    name: "hello",
    help: "Hello, world!",
    execute,
}