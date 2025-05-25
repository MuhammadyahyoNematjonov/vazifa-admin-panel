import express from "express"
import indexRouter from "./routers/index.js"
import { connectDB } from "./config/db.js"
import fs from "fs"
import path from "path"
import "dotenv/config"

const app = express()
app.use(express.json())


await connectDB()

app.use(indexRouter.userRouter)
app.use(indexRouter.brench)

app.use((error, req, res, next) => {
    if (error.status && error.status < 500) {
        return res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }
    fs.appendFileSync(path.join(process.cwd(), "logger.txt"), `${req.method}__${req.url}__${new Date()}__500__${error.name}__${error.message} \n`)
    return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        data: null
    })

})


app.listen(5000, () => console.log("Server is run..."))