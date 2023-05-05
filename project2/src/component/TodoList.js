import { useState } from 'react';
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  const getSearchResult = () => {
    return search === ""
      ? todo 
      : todo.filter(item => item.content.toLowerCase().includes(search.toLowerCase()));
  };

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChange}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map(item => ( 
          <TodoItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;