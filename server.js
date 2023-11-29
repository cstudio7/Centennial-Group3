
import configs from './config/config.js'
import app from './server/express.js'
import mongoose from 'mongoose' 

mongoose.Promise = global.Promise
mongoose.connect(configs.mongoUri, { useNewUrlParser: true,
//useCreateIndex: true, 
useUnifiedTopology: true } )

.then(() => {
console.log("Connected to the database!");
})

mongoose.connection.on('error', () => {
throw new Error(`unable to connect to database:${configs.mongoUri}`)
})

app.get("/", (req, res) => {
res.json({ message: "Welcome to User application." });
});
app.listen(configs.port, (err) => {
if (err) {
console.log(err) 
}
console.info('Server started on port %s.', configs.port)
})