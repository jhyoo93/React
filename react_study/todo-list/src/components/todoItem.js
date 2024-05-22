import React, {useState}from 'react';

// conponent 생성
function TodoItem(props) {
    const [todoList, setTodoList] = useState([]);
    const onDelete = (item) =>{
        
    }

    return(
        <div className="todo-item">
            {props.item}
            <button onClick={onDelete}> X </button>
        </div>
    )
}

export default TodoItem;