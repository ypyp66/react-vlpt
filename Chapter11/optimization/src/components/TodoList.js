import { memo, useCallback } from "react";
import "./TodoList.scss";
import { List } from "react-virtualized";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRender = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todos={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos]
  );
  return (
    <>
      <List
        className="TodoList"
        width={512}
        height={513}
        rowCount={todos.length}
        rowHeight={57}
        rowRenderer={rowRender}
        list={todos}
        style={{ outline: "none" }}
      />
      {/* <div className="TodoList">
        {todos.map((todo) => (
          <TodoListItem
            todos={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </div> */}
    </>
  );
};

export default memo(TodoList);
