const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BalCommand extends BaseCommand {
  constructor() {
    super('bal', 'currency', []);
  }

  run(client, message, args) {
    message.channel.send('bal command works');
  }
}