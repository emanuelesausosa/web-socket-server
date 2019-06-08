const server = require("express")();
const http = require("http").Server(server);
const path = require("path");

const port = process.env.PORT || 3000;

const channels = require("./sockets");
channels(http);

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

server.get("/post", (req, res) => {
  res.sendFile(path.join(__dirname, "/post.html"));
});

http.listen(port, () => {
  console.log(`> server start on http://localhost:${port}`);
});
