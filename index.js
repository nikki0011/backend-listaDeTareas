import Server from "./src/server/config.js";
import router from "./src/routes/index.routes.js";
//instanciamos la clase servidor

const server = new Server()
// acceso a rutas http://localhost:3000/api
server.app.use('/api', router)

server.listen()