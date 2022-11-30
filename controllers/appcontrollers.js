const TodoModel = require('../Models/todoModel');
exports.createTodo = async(req,res) => {
    try {
        const {title, isImportant, tasks} = req.body;
        
        const todo = await TodoModel.create({
            title,isImportant,tasks
        });
        res.status(200).json({
            "message":"success",
            todo
        });

    } catch (err) {
        res.status(400).json({
            "message":"failure",
            "error":err.message
        })
    } 
}

// exports.updateTodo = (req,res) => {
  
    
// }

// exports.deleteTodo = (req,res) => {
    
// }

exports.getTodos = async (req,res) => {

    try {
        const alltodos = await TodoModel.find(); // db operations
        res.status(200).json({
            "message":"success",
            alltodos
        });
        
    } catch (err) {
        res.status(400).json({
            "message":"failure",
            "error":err.message
        }) 
    }
}

// exports.searchTodos = (req,res) => {
//     console.log("hello");
// }

