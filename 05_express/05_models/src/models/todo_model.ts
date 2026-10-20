import { type Todo } from "../interfaces/todo_interfaces.js";

class TodoModel{
    private static todos:Todo[] = [];
    
    public static getAllTodos():Todo[]{
        return TodoModel.todos;
    }

    public static getTodoById(id:number):Todo | undefined{
        return TodoModel.todos.find((todo)=>todo.id == id);
    }

    public static addTodo(new_todo:Todo):void{
        TodoModel.todos.push(new_todo);
    }

    public static updateTodo(index:number, updated_todo:Todo):void{
        TodoModel.todos[index] = updated_todo;
    }

    public static deleteTodo(index:number):void{
        TodoModel.todos.splice(index,1);
    }
}

export default TodoModel;