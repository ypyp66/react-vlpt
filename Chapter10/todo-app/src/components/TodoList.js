import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todos={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;