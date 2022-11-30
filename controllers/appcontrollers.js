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
        console.log(err.message)
        res.status(400).json({
            "message":"failure",
            "error":err.message
        })
    } 
}

exports.updateTodo = (req,res) => {

}

exports.deleteTodo = (req,res) => {

}

exports.getTodos = (req,res) => {

}

exports.searchTodos = (req,res) => {

}

