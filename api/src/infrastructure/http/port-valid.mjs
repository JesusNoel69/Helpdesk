import net from "node:net";

function findPort(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    //if port is available close server and returns port
    server.listen(port, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });

    //if server catch an error use a secure port using 0
    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        findPort(0).then(resolve).catch(reject);
      } else {
        reject(err);
      }
    });
  });
}

export default findPort;
