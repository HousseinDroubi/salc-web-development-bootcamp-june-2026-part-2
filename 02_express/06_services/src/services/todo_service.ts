import TodoModel from "../models/todo_model.js";
import { type Todo } from "../interfaces/todo_interfaces.js";

class TodoService {
    public static getAllTodos():Todo[]{
        return TodoModel.getAllTodos();
    }

    public static getTodoById(id:number):Todo | undefined{
        return TodoModel.getTodoById(id);
    }

    public static addTodo(todo:Omit<Todo,"completed">):Todo{
        const new_todo:Todo = {
            ...todo,
            completed:false
        };
        TodoModel.addTodo(new_todo);
        return new_todo;
    }

    public static updateTodo(id:number,todo: Partial<Todo>):Todo | 404 | 405{
        const all_todos:Todo[] = TodoModel.getAllTodos();
        const index = all_todos.findIndex((todo)=>todo.id == id);
        if(index==-1){
            return 404;
        }

        const existed_todo:Todo = all_todos[index] as Todo;
        
        if(todo.title == undefined && todo.description == undefined && todo.completed == undefined){
            return 405;
        }

        if(todo.title !== undefined){
            existed_todo.title = todo.title;
        }


        if(todo.description !== undefined){
            existed_todo.description = todo.description;
        }

        if(todo.completed !== undefined){
            existed_todo.completed = todo.completed;
        }

        TodoModel.updateTodo(index, existed_todo);

        return existed_todo;
    }

    public static deleteTodo(id:number):boolean{
        const all_todos:Todo[] = TodoModel.getAllTodos();
        const index = all_todos.findIndex((todo)=>todo.id == id);
        if(index==-1){
            return false;
        }

        TodoModel.deleteTodo(index);
        return true;

    }
   
}

export default TodoService;