const express = require("express");
const router = express.Router();
const {createTodo, getTodos, updateTodo, deleteTodo, searchTodo} = require('../controllers/appcontrollers');

router.get('/todo/getTodos', getTodos);
router.post('/todo/createTodo', createTodo);
router.put('/todo/createTodo', updateTodo);
router.delete('/todo/createTodo', deleteTodo);
router.get('/todo/createTodo', searchTodo);

module.exports = router;