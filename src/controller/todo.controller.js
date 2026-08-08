import Todo from '../models/todo.model.js';
import mongoose from "mongoose";


// all todos
const getTodos = async (req, res) => {
        const todos = await Todo.find({});
        res.status(200).json(todos);
};

// single todo
const getTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such todo" });
    }

    const todo = await Todo.findById(id);
    if(!todo) {
        return res.status(404).json({ error: "No such todo" });
    };

    res.status(200).json(todo);
};

// create new todo
const createTodo = async (req, res) => {
    const { title, description } = req.body;

    if(!title || !description) {
        return res.status(400).json({ error: "Please fill all the fields" });
    };

    try{
        const todo = await Todo.create({ title, description });
        res.status(200).json(todo); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

//updated todo
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such todo" });
    };

    try{
        const todo = await Todo.findByIdAndUpdate(id, { title, description }, { new: true });
        if(!todo) {
            return res.status(404).json({ error: "No such todo" });
        };
        res.status(200).json(todo);

    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

//delete todo
const deleteTodo = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such todo" });
    };

    try{
        const todo = await Todo.findByIdAndDelete(id);
        if(!todo) {
            return res.status(404).json({ error: "No such todo" });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export {getTodos, getTodo, createTodo, updateTodo, deleteTodo};