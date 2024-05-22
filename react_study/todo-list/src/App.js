import React, {useState}from 'react';
import TodoBoard from './components/todoBoard'; //TodoBoard 컴포넌트 가져옴\

import './App.css';

function App() {
  const [/*변수값*/inputTxt, /*setter 수정*/setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    // setter array에 input입력값 추가.
    setTodoList([ 
                ...todoList, 
                inputTxt, 
                ]); 
    // 입력창 초기화            
    setInputText(''); 
    console.log(todoList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <main>
          <div>
            <input type="text" id="txt" value={inputTxt} onChange={(event) => setInputText(event.target.value)}/> &nbsp;
            <button onClick={() => addItem()}>추가</button>
            <TodoBoard todoList={todoList}/>

          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
