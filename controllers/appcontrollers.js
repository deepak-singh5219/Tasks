
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

exports.updateTodo = async(req,res) => {
  
    try {
        const todo = await TodoModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            message:"success",
            updatedTodo:todo
        })
        
    } catch (err) {
        res.status(400).json({
            "message":"failure",
            "error":err.message
        })
        
    }
    
}

exports.deleteTodo =  async(req,res) => {
    try {
        const todo = await TodoModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            "message":"success",
            "status":"Todo deleted"
        })
    } catch (err) {
        res.status(400).json({
            "message":"failure",
            "message":err.message
        })
        
    }   
}

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

exports.searchTodos = async(req,res) => {

    try {

    const {search} = req.query;
    const results = await TodoModel.find({$text:{ $search:search}});
    

    res.status(200).json({
      "message":"success",
       results
    });
 
    } catch (error) {
        res.status(400).json({
            "message":"failure",
            "error":error.message
        })
        
    }
}

