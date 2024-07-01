import {create} from 'zustand';

// Zustand Snippet -> 코드자동 완성화 확장팩

// state 보관함을 만들어주는 함수
// 변수나 함수를 전역으로 설정해 다른 컴포넌트에서 사용가능
// axios요청도 설정 가능함. 
export const useMemoStore = create((set) => ({
  memoList: [],
  // 등록 액션 함수
  // 액션 함수는 인자를 받아서 set함수를 return 하는 방식으로 만들어줌.
  addMemo: (val) => 
    // 이전 값(prev) 을 받아서 이전에 존재하는값(...prev.memoList)에 받은 인자(contens, id)를 새로 넣어준다.
    set((prev) => ({
     memoList: [...prev.memoList, { content: val, id: new Date().getMilliseconds + val },],
  })),
  // 삭제 액션 함수
  // 액션 함수는 인자를 받아서 set함수를 return 하는 방식으로 만들어줌.
  removeMemo: (id) =>
    // id를 입력받아서 기존에존재하느 배열을 filter에 id가 일치하지 않는것만 남겨준다
    set((prev) => ({
      memoList: prev.memoList.filter((e) => e.id !== id)
    })),
}));