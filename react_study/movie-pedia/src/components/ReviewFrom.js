import { useState } from "react";
import "./ReviewForm.css";
import FileInput from "./fileInput";
import RatingInput from "./RatingInput";
import useAsync from "./hooks/useAsync";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function ReviewForm({
  initialValues = INITIAL_VALUES,
  initialPreview,
  onSubmitSuccess,
  onSubmit,
  onCancel,
}) {
  const [isSubmitting, submitError, onSubmitAsync] = useAsync(onSubmit);
  const [values, setValues] = useState(initialValues);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("rating", values.rating);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);

    let result = await onSubmitAsync(formData);
    if (!result) return;
    
    const { review } = result;
    setValues(INITIAL_VALUES);
    onSubmitSuccess(review);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
        initialPreview={initialPreview}
      />
      <input
        name="title"
        value={values.title}
        onChange={handleInputChange}
      ></input>
      <RatingInput
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      ></textarea>
      {onCancel && <button onClick={onCancel}>취소</button>}
      <button type="submit" disabled={isSubmitting}>
        확인
      </button>
      {submitError?.message && <div>{submitError.message}</div>}
    </form>
  );
}

export default ReviewForm;
