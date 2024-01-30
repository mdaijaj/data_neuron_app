const mongoose=require('../database/db');
const Schema = mongoose.Schema

let contentSchema=  new Schema({
    title: {
       type: String,
       required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    add_count: {
        type: Number,
        default: 0
    },
    update_count: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});  

module.exports= mongoose.model('content', contentSchema);
