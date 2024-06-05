import { useState } from 'react';
import Button from './Button';
import Board from './Board';
import './App.css';

import dicelogo from './assets/logo.png';


function App () {
  // useState를 사용해 변수 선언
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  function random(n) {
    return Math.ceil(Math.random() * n);
  }
  
  // 주사위 랜덤 6개 숫자 함수
  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);

    // 총 점수 배열에 푸쉬후 set해줌
    setMyHistory([...myHistory, nextMyNum]);
    // 총 점수 배열에 푸쉬후 set해줌
    setOtherHistory([...otherHistory, nextOtherNum]);
  };
  
  // 주사위 값 초기화 함수
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className='App'>
      <div>
        <img class="App-logo" src={dicelogo} alt="주사위게임 로고" />
        <h1 class="App-title">주사위게임</h1>
        <div>
          <Button className="Button blue App-button" color="blue" onClick={handleRollClick}>던지기</Button>
          <Button className="Button red App-button" color="red" onClick={handleClearClick}>처음부터</Button>
        </div>
      </div>
      <div className="App-boards">
        <div className="Board App-board">
          <Board className="Board-heading" name="나" color="blue" gameHistory={myHistory}/>         
        </div>
        <div className="Board App-board">
          <Board name="상대" color="red" gameHistory={otherHistory}/>
        </div>
      </div>
    </div>    
  );
}

export default App;