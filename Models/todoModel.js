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

todoSchema.index({'$**': 'text'});   // index to search for alll strings in schema
// todoSchema.index({name: 'text', 'tasks': 'text'});  // index to search only in tasks
module.exports = mongoose.model("todo",todoSchema);