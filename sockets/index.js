function channels(server) {
  // llamar a socket io
  const io = require("socket.io")(server);

  //connect
  io.on("connect", socket => {
    console.log(`Cliente conectado ${socket.client.id}`);

    // nuevo canal --canal de prueba -> test
    socket.on("saludo", data => {
      console.log(`el cliente dijo: ${JSON.stringify(data)}`);

      // servidor emite a los sockets el saludo de un cliente
      io.emit("saludo:respuesta", data);
    });

    // canal para post en vivo
    socket.on("post", data => {
      console.log(`El cliente posteo: ${JSON.stringify(data)}`);

      // envia una respuesta a todos los sockets
      io.emit("ultimo:post", data);
    });

    // socket diconnect
    socket.on("disconnect", () => {
      console.log(`Cliente desconectado ${socket.client.id}`);
    });
  });
}

module.exports = channels;
