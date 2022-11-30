const express = require("express");
const router = express.Router();
const {createTodo, getTodos, updateTodo, deleteTodo, searchTodo} = require('../controllers/appcontrollers');

router.get('/todo/getTodos', getTodos);
router.post('/todo/createTodo', createTodo);
router.put('/todo/updateTodo/:id', updateTodo);
router.delete('/todo/deleteTodo/:id', deleteTodo);
// router.get('/todo/searchTodo', searchTodo);

module.exports = router;