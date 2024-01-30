
const contentModel= require('../models/content_schema')


//add content
const addContent= async(req,res)=>{
    try{
        const {firstname,lastname,email,mobile,title, time}=req.body;
        console.log(req.body)
        const countdata= await contentModel.find()
        let countitem=countdata.length>0? countdata.length +1 : 1
        const addTextData= new contentModel({firstname,lastname,email,mobile,title, time, add_count: countitem})
        console.log("addTextData", addTextData)
        await addTextData.save();
        return res.status(200).send({message: "add succesfully!", result: addTextData})
    }
    catch(err){
        console.log(err.message)
    }
}

//all content here
const allContent= async(req,res)=>{
    const contents= await contentModel.find()
    console.log("contents", contents)
    return res.status(200).send({message: "show all data sucess", data: contents})
}

//single image and video uploding 
const updateContent= async(req,res)=>{
    try{
        const mainObj=req.body;   
        const ticketdata = await contentModel.findOne({ _id: req.params.id });
        if (ticketdata) {
           let  countitem= ticketdata.update_count+=1
          const updateData = await contentModel.updateOne(
            { _id: req.params.id },
            { $set: mainObj, update_count: countitem }
          );
          console.log("updateData", updateData)
          return res.send({ status: "update data successfully! ", "result": updateData })
        }
    }
    catch(err){
        return res.send({message: err.message})
    }
}


const contentDetails= async(req,res)=>{
    const userId=req.params.id
    try{
        const contentsData= await contentModel.findById({_id: userId})
        console.log("contents", contentsData)
        if(contentsData){
            return res.status(200).send({message: "show all data sucess", data: contentsData})
        }else{
            return res.status(400).send({message: "Data not found.."})
        }
    }
    catch(err){
        return res.send({message: err.message})
    }
}


module.exports={
    addContent,
    allContent,
    updateContent,
    contentDetails
}