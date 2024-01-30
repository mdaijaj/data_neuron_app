const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/dataNeoron', {
    useUnifiedTopology: true,
    useNewUrlParser:true,
}).then(()=>{
    console.log("db connected successfully!")
}).catch((err)=>{
    console.log("errro while connected db,........")
    console.log(err.message)
})



module.exports=mongoose;