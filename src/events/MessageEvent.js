// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
const BaseEvent = require('../utils/structures/BaseEvent');
const devCooldown

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    console.log(message)
    if(message.author.bot) return;
    if(message.channel.type != "dm") return;
    if(message.content.toLowerCase().startsWith("dev")) {
      if()
    }

  }
}