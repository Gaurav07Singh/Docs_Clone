import mongoose from "mongoose";

const Connection = async (username = 'admin' , password='googlepassword') => {
    const URL = process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-cvwjtw7-shard-00-00.iclu8ei.mongodb.net:27017,ac-cvwjtw7-shard-00-01.iclu8ei.mongodb.net:27017,ac-cvwjtw7-shard-00-02.iclu8ei.mongodb.net:27017/?ssl=true&replicaSet=atlas-gu7nok-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
       await mongoose.connect(URL , { useUnifiedTopology: true , useNewUrlParser : true });
       console.log("DB connection successfull");
    } catch (error)
    {
        console.log("Error while connecting with database" , error);
    }
}
export default Connection;