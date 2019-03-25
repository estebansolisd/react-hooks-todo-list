import React from 'react';
import '../asset/styles.css';

const todolist = (props) => {
    return (
        <div className="todos-group">
            {props.todos.map((todo,index)=>{
                return (
                    <div key={`id${index}`} >
                        {todo.name}
                    </div>
                );
            })}
        </div>
    );
} 

export default todolist;