import { useMemoStore } from "../store/memoList";

const MemoElem = (props) => {
  const { children, id } = props;
  const { removeMemo } = useMemoStore();

  return (
    <>
      <div>{children}</div>
      <button onClick={() => removeMemo(id)}>삭제</button>
    </>  
  );
};

export default MemoElem;