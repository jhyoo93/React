import './ReviewList.css';

// 날짜 포맷 함수
function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth()}. ${date.getDay()}`;
}

function ReviewListItem({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);
  
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title}/>
      <div> 
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );

}

function ReviewList({ items, onDelete }) {
  return (
    <ul>
        {items.map((item) => { // ul 태그 리스트 선언  
          return ( // li 태그 ReviewListItem 컴포넌트 출력
            <li key={item.id}>
              <ReviewListItem item={item} onDelete={onDelete}/>
            </li>
          );
        })}
    </ul>
  );
}

export default ReviewList;
