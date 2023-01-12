import path from "path"
import cors from "cors"
import express from "express"

import router from "@/routes"
import productsRepository from "./respositories/productsRepository"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/files", express.static(path.join(__dirname, "..", "tmp", "uploads")))
app.use(router)

export default app
