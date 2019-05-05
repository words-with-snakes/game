
const clientOnMessage = ws => message => {
  console.log('received: %s', message);
  ws.send(`Received: ${message}`);
};

module.exports = { clientOnMessage };
