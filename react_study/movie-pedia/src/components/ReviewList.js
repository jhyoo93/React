import { useState } from "react";
import { useLocale } from "../contexts/LocaleContext";
import Rating from "./Rating";
import ReviewForm from "./ReviewFrom";
import "./ReviewList.css";

// 날짜 포맷 함수
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth()}. ${date.getDay()}`;
}

function ReviewListItem({ item, onDelete, onEdit }) {
  const locale = useLocale();

  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <p>현재 언어: {locale}</p>
        <button onClick={handleDeleteClick}>삭제</button>
        <button onClick={handleEditClick}>수정</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete, onUpdate, onUpdateSuccess }) {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => setEditingId(null);

  return (
    <ul>
      {items.map((item) => {
        // ul 태그 리스트 선언
        // 게시물 수정
        if (item.id === editingId) {
          const { id, imgUrl, title, rating, content } = item;
          const initialValues = { title, rating, content, imgFile: null };

          const handleSubmit = (FormData) => onUpdate(id, FormData);

          const handleSubmitSuccess = (review) => {
            onUpdateSuccess(review);
            setEditingId(null);
          };

          return (
            // li 태그 ReviewListItem 컴포넌트 출력
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                onCancel={handleCancel}
                initialPreview={imgUrl}
                onSubmit={handleSubmit}
                onSubmitSuccess={handleSubmitSuccess}
              />
            </li>
          );
        }
        return (
          // li 태그 ReviewListItem 컴포넌트 출력
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
