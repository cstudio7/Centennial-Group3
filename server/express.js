
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template.js'
import productRoutes from './routes/product.routes.js'
import usersRoutes from './routes/users.routes.js'
import authRoutes from './routes/auth.routes.js'
import path from 'path'

const app = express()
const CURRENT_WORKING_DIR = process.cwd()
//...
app.get('/', (req, res) => {
res.status(200).send(Template()) 
})
//...
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mount routes
app.use('/', productRoutes)
app.use('/', usersRoutes)
app.use('/', authRoutes)

//parse body params
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(compress())
app.use(helmet())
helmet({
    crossOriginResourcePolicy: false,
})
app.use(cors())

//catch unautoried errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message}) 
    }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message}) 
    console.log(err)
    } 
    })
    
export default app

