import http from "node:http";
import findPort from "./port-valid.mjs";
import { router } from "./router.mjs";

async function startServer() {
  const server = http.createServer(async (req, res) => {
    //generic response
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/plain");
    // res.end("it works");
    // delegate to router
    try {
      await router(req, res);
    } catch (err) {
      //error on server
      res.writeHead(err.statusCode || 500, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({ error: err.message }));
    }
  });
  const PORT = 3000;
  findPort(PORT).then((port) =>
    server.listen(port, () => {
      console.log(`Servidor ejecutandose en http://localhost:${port}/`);
    })
  );

  return server;
}
//use meta for cli url
if (import.meta.url === `file://${process.argv[1]}`) {
  // execute with `node server.mjs`
  startServer().catch((err) => {
    console.error("Error al arrancar:", err);
    process.exit(1);
  });
}

export default startServer;
