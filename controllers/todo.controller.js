const Todo = require('../models/todo.model');

exports.index = (req, res) => {
    Todo.find({})
        .then(todos => res.send(todos))
        .catch(err => err)
};

exports.new = (req, res) => {
    let todo = new Todo({ value: req.body.value });

    todo.save()
        .then(todo => res.send(todo))
        .catch(err => err)
};

exports.checked = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, {completed: req.body.completed}, {new: true})
        .then(todo => res.send(todo))
        .catch(err => err)
};

exports.delete = (req, res) => {
    Todo.findByIdAndRemove(req.params.id)
        .then(todo => res.send(todo))
        .catch(err => err)
};

exports.clear_completed = (req, res) => {
    Todo.deleteMany({completed: true})
        .then(todo => {
            Todo.find({})
                .then(todo => res.send(todo))
                .catch(err => err)
        })
        .catch(err => err)
};

exports.mark_all = (req, res) => {
    Todo.updateMany({completed: !req.body.allChecked}, {completed: req.body.allChecked})
        .then(todo => {
            Todo.find({})
                .then(todo => res.send(todo))
                .catch(err => err)
        })
        .catch(err => err)
};

exports.update = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, { value: req.body.value }, {new: true})
        .then(todo => res.send(todo))
        .catch(err => err)
};