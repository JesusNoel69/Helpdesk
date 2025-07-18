import http from "node:http";
import findPort from "./port-valid.mjs";
export default async function startServer() {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("it works");
  });
  const PORT = 3000;
  findPort(PORT).then((port) =>
    server.listen(port, () => {
      console.log(`Servidor ejecutandose en http://localhost:${port}/`);
    })
  );
}
