import { useCallback, useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewFrom";
import { createReview, deleteReview, getReviews, updateReview } from "../api";
import useAsync from "./hooks/useAsync";
import { LocaleProvider } from "../contexts/LocaleContext";
import LocalSelect from "./LocaleSelect";

const LIMIT = 6;

function App() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, loadingError, getReviewAsync] = useAsync(getReviews);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClck = () => setOrder("createdAt");
  const handleClck = () => setOrder("rating");

  const handleDelete = async (id) => {
    const result = await deleteReview(id);
    if(!result) return;

    // 리스트 재랜더링
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleLoad = useCallback(async (options) => {
    let result = await getReviewAsync(options);
    if (!result) return;
    
    const { reviews, paging } = result;
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  }, [getReviewAsync]);

  // callback함수
  // 맨처음 랜더링이 끝나면 콜백함수 실행 그후 디펜던시 리스트를 비교해서 기억한 값이랑 다른경우에만 콜백이 실행됨.
  // 데이터 출력시 무한루프가 발생함으로 useEffect함수를 사용해야함
  useEffect(() => {
    // 처음 App 컴포넌트가실행되면 handleLoad 함수를 호출하여 order, offset, limit 값으로 request 전달
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order, handleLoad]);

  // 더보기
  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  // 등록
  const handleCreateSuccess = (review) => {
    setItems((prevItems) => [review, ...prevItems]);
  };

  // 수정
  const handleUpdateSuccess = (review) => {
    setItems((prevItems) => {
      const splitIdx = prevItems.findIndex((item) => item.id === review.id);
      return [
        ...prevItems.slice(0, splitIdx),
        review,
        ...prevItems.slice(splitIdx + 1),
      ];
    });
  };

  return (
    // LocalContext로 전역 데이터를 설정
    <LocaleProvider defaultValue={'ko'}>
    {/*컴포넌트 랜더링 */}
    <div>
      <LocalSelect/>
      <div>
        <button onClick={handleNewestClck}>최신순</button>
        <button onClick={handleClck}>베스트</button>
      </div>
      <ReviewForm
        onSubmit={createReview}
        onSubmitSuccess={handleCreateSuccess}
      />
      <ReviewList
        items={sortedItems}
        onDelete={handleDelete}
        onUpdate={updateReview}
        onUpdateSuccess={handleUpdateSuccess}
      />
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더보기
        </button>
      )}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
    </LocaleProvider>
  );
}

export default App;
