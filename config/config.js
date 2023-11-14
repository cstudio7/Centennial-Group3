const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI ||"mongodb+srv://kylenormangs3:szGfVD0c3kQQLLdb@comp229groupprojectclus.iisvdbk.mongodb.net/"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || '199.212.27.245/32') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/GroupProject' 
    }
    export default config

