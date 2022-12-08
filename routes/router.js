const express = require("express");
const router = express.Router();
const {createTodo, getTodos, updateTodo, deleteTodo, searchTodos} = require('../controllers/appcontrollers');

router.get('/todo/getTodos', getTodos);
router.post('/todo/createTodo', createTodo);
router.put('/todo/updateTodo/:id', updateTodo);
router.delete('/todo/deleteTodo/:id', deleteTodo);
router.get('/todo/searchTodo', searchTodos);

module.exports = router;