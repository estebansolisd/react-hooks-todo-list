import React, {useState} from 'react';

const todoform = (props) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.changed(text);
        setText('');
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/>
            </form>
        </div>
    );
}

export default todoform;