const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
        maxLength:[70,"maximum limit reached"]
    },
    tasks:[{
        type:String,
    }],
    isImportant:{
        type:Boolean,
    }
},
{
    timestamps: true
}
)

todoSchema.index({'$**': 'text'});
module.exports = mongoose.model("todo",todoSchema);