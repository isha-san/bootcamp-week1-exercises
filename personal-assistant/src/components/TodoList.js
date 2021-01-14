
import React, { useState } from 'react';
function TodoList() {

  const [todoList, setTodoList] = useState([
    {
      title: "titles display here",
      description: "descriptions display here",
      id: 0
    }
  ], );
  let formData = {
    title: '', 
    description: ''
  };
  
  const onChange = (e) => formData = { ...formData, [e.target.name]: e.target.value };
  const addTodo = (e) => {
    e.preventDefault();
    setTodoList([...todoList, {...formData, id: todoList.length}]);
    formData = {title:'', description:''};
  };
  const deleteTodo = () => {
    setTodoList(todoList.slice(0, todoList.length - 1));
    formData = {title:'', description:''};
  };

    return(
    <div className="todos">
      <h1>To Do List</h1>
      <h3>Enter new todos here</h3>
      <form>
          <label>Title</label>
          <input id="title-input" name="title" type="text" onChange={e => onChange(e)}/>
          <label>Description</label>
          <input id="description-input" name="description" type="text" onChange={e => onChange(e)}/>
          <button value="submit" onClick={e => addTodo(e)}>Submit</button>
      </form>
      <button onClick={deleteTodo}>Delete</button>
      <div id="todo-list">
        {todoList.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={e => deleteTodo(e, todo.id)}>Delete</button>
        </div>))}
      </div>
      
    </div>
    );
  };

  export default TodoList; 
