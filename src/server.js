import express from "express"
import { config } from "dotenv"

import routes from "./routes/index.routes.js"
import planetasRoutes from "./routes/planetas.routes.js"

config()

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(routes)

app.listen(port, () => {
console.log(`🧨Servidor a todo vapor!! em http://localhost:${port}`);
})

routes.use("/planetas", planetasRoutes)

export default routes