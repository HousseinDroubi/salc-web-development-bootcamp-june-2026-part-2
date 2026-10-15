import { type Request, type Response } from "express";
import TodoModel from "../models/todo_model.js";
import type { Todo } from "../interfaces/todo_interfaces.js";

class TodoController{
    public static getAllTodos(request:Request, response:Response):void{
        try {
            const todos:Todo[] = TodoModel.getAllTodos();
            response.status(200).json({
                todos
            });
        } catch (error) {
            response.status(500).json({
                message:"Server error"
            });
        }
    }

    public static getTodoById(request:Request, response:Response):void{
        try {
            const id = parseInt(request.params.id as string);
            const todo:Todo | undefined = TodoModel.getTodoById(id);
            if(todo==undefined){
                response.status(404).json({
                    message:"Todo not found"
                });
                return;
            }

            response.status(200).json({
                todo
            })

        } catch (error) {
            response.status(500).json({
                message:"Server error"
            });
        }
    }

    public static addTodo(request:Request, response:Response):void{
        try {
            const {id, title, description} = request.body;
            const new_todo:Todo ={
                id,
                title,
                description,
                completed:false
            };
            
            TodoModel.addTodo(new_todo);
            response.status(201).json({
                todo:new_todo
            });
        } catch (error) {
            response.status(500).json({
                message:"Server error"
            });
        }
    }

    public static updateTodo(request:Request, response:Response):void{
        try {
            const id = parseInt(request.params.id as string);
            const all_todos = TodoModel.getAllTodos();
            const index = all_todos.findIndex((todo)=>todo.id == id);            
            
            if(index == -1){
                response.status(404).json({
                    message:"Todo not found"
                });
                return;
            }

            const updated_todo = all_todos[index];

            const {title, description, completed} = request.body as Partial<Todo>;

            if(title == undefined && description == undefined && completed == undefined){
                response.status(405).json({
                    message:"Please send at least one paramter"
                });
                return;
            }

            if(title!=undefined){
                updated_todo!.title = title;
            }

            if(description!=undefined){
                updated_todo!.description = description;
            }

            if(completed!=undefined){
                updated_todo!.completed = completed;
            }

            TodoModel.updateTodo(index, updated_todo!);

            response.status(200).json({
                todo:updated_todo
            })
        } catch (error) {
            response.status(500).json({
                message:"Server error"
            });
        }
    }

    public static deleteTodo(request:Request, response:Response):void{
        try {
            const id = parseInt(request.params.id as string);
            const all_todos = TodoModel.getAllTodos();
            const index = all_todos.findIndex((todo)=>todo.id == id);            
            
            if(index == -1){
                response.status(404).json({
                    message:"Todo not found"
                });
                return;
            }
            TodoModel.deleteTodo(index);
            response.status(204).send();
        } catch (error) {
            response.status(500).json({
                message:"Server error"
            });
        }
    }
}

export default TodoController;