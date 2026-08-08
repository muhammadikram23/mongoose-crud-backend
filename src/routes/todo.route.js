import experss from "express";

import { createTodo, getTodos, updateTodo, deleteTodo } from "../controller/todo.controller.js";

const router = experss.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);      

export default router;