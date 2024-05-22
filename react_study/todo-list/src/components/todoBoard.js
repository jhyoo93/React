import React from 'react';
import TodoItem from './todoItem'; // TodoItem 컴포넌트 가져옴

// conponent 생성
function TodoBoard(props) {
    return(
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item => <TodoItem item={item} />))}
        </div>
    )
}

export default TodoBoard;