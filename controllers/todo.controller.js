const Todo = require('../models/todo.model');

module.exports = {
    index: (req, res) => {
        Todo.find({})
            .then(todos => res.status(200).send(todos))
            .catch(err => res.status(404).send(err))
    },
    
    newTodo: (req, res) => {
        let todo = new Todo({ value: req.body.value });
    
        todo.save()
            .then(todo => res.status(201).send(todo))
            .catch(err => res.status(400).send(err))
    },
    
    checked: (req, res) => {
        Todo.findByIdAndUpdate(req.params.id, {completed: req.body.completed}, {new: true})
            .then(todo => res.status(200).send(todo))
            .catch(err => res.status(400).send(err))
    },
    
    deleteTodo: (req, res) => {
        Todo.findByIdAndRemove(req.params.id)
            .then(todo => res.status(200).send(todo))
            .catch(err => res.status(400).send(err))
    },
    
    clear_completed: (req, res) => {
        Todo.deleteMany({completed: true})
            .then(todo => {
                Todo.find({})
                    .then(todo => res.status(200).send(todo))
                    .catch(err => res.status(400).send(err))
            })
            .catch(err => res.status(400).send(err))
    },
    
    mark_all: (req, res) => {
        Todo.updateMany({completed: !req.body.allChecked}, {completed: req.body.allChecked})
            .then(todo => {
                Todo.find({})
                    .then(todo => res.status(200).send(todo))
                    .catch(err => res.status(400).send(err))
            })
            .catch(err => res.status(400).send(err))
    },
    
    update: (req, res) => {
        Todo.findByIdAndUpdate(req.params.id, { value: req.body.value }, {new: true})
            .then(todo => res.status(200).send(todo))
            .catch(err => res.status(400).send(err))
    }
}

