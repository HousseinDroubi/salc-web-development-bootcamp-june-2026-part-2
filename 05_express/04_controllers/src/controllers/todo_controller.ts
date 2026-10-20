import  {type Todo } from "../interfaces/todo_interfaces.js";
import { type Request, type Response } from "express";
class TodoController{
    private static todos:Todo[] = [];
    
    public static getAllTodos(request:Request, response:Response):void{
        response.status(200).json({
            todos:TodoController.todos
        });
    }

    public static getTodoById(request:Request, response:Response):void{
        const id = parseInt(request.params.id as string);

        const index = TodoController.todos.findIndex((todo)=>todo.id == id);
        if(index == -1){
            response.status(404).json({
                message:"Todo not found"
            })
            return;
        }

        response.status(200).json({
            todo: TodoController.todos[index]
        })
    }

    public static addNewTodo(request:Request, response:Response):void{
        const todo = request.body.todo as Omit<Todo,"completed">;
        TodoController.todos.push({...todo, completed:false});
        response.status(201).json({
            message:"Todo added"
        })
    };

    public static updateTodo(request:Request, response:Response):void{
        const id = parseInt(request.params.id as string);
        const index = TodoController.todos.findIndex((todo)=>todo.id == id);
       
        if(index == -1){
            response.status(404).json({
                message:"Todo not found"
            })
            return;
        }
        
        const todo = request.body.todo as Partial<Todo>; 
        const updated_todo:Todo = {...TodoController.todos[index]} as Todo;

        if(todo.title == undefined && todo.description==undefined && todo.completed == undefined){
            response.status(405).json({
                message:"Please provide either title, description or completed"
            })
        }

        if(todo.title !== undefined){
            updated_todo.title = todo.title;
        }

        if(todo.description !== undefined){
            updated_todo.description = todo.description;
        }

        if(todo.completed !== undefined){
            updated_todo.completed = todo.completed;
        }

        TodoController.todos[index] = updated_todo;

        response.status(200).json({
            new_todo:updated_todo
        });
    }

    public static deleteTodo(request:Request, response:Response):void{
        const id = parseInt(request.params.id as string);
        const index = TodoController.todos.findIndex((todo)=>todo.id == id);
       
        if(index == -1){
            response.status(404).json({
                message:"Todo not found"
            })
            return;
        }
        
        TodoController.todos = TodoController.todos.filter((todo)=>todo.id != id);
        response.status(204).send();
    }
}

export default TodoController;