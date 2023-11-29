const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI ||"mongodb://localhost:27017/Group3"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || '0.0.0.0/0 ') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/assignment2' 
    }
    export default config

/*
//offline local config
const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI ||"mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/assignment2' 
    }
    export default config
*/