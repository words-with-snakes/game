
const clientOnMessage = (ws) => {
  return (message) => {
    console.log('received: %s', message);
    ws.send(`Received: ${message}`);
  };
};

module.exports = { clientOnMessage };
