import { Children } from "react";

const MemoBoard = (props) => {
  return (
    <>
      {props.children}
      <div>떠든사람 : 잡캐헨리</div>
    </>  
  );
};

export default MemoBoard;