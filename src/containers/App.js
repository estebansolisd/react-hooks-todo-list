import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import '../asset/styles.css';
const app = () => {
    const [todos, setTodos] = useState([{name:"I'm the first :)"}]);
    const handleSubmit = name => setTodos([...todos,{name}]);

    return (
        <div className="App">
         <TodoList todos={todos} />
         <TodoForm changed={handleSubmit}/>
        </div>
    );
}

export default app;