import { useMemoStore } from "../store/memoList";
import { useState } from "react";
const MemoInput = () => {
  const { addMemo } = useMemoStore();
  const [value, setValue] = useState("");

  return (
    <>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addMemo(value);
        
        setValue("");
      }}
    >
      <div>
        <input
          type="text"
          onChange={(e) =>
            setValue((prev) => {
              if (prev !== e.target.value) {
                return e.target.value;
              }
            })
          }
          value={value}
        />
        <button type="submit">저장</button>
      </div>
    </form>
    </>
  );
};

export default MemoInput;