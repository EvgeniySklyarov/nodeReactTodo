const express = require('express');
const router = express.Router();

const todo_controller = require('../controllers/todo.controller');

router.get('/index', todo_controller.index);
router.post('/new', todo_controller.newTodo);
router.delete('/delete/:id', todo_controller.deleteTodo);
router.delete('/clear-completed', todo_controller.clear_completed);
router.put('/checked/:id', todo_controller.checked);
router.put('/mark-all', todo_controller.mark_all);
router.put('/update/:id', todo_controller.update);

module.exports = router;