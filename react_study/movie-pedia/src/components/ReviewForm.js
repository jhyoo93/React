import { useState } from "react";
import './ReviewForm.css';
import FileInput from "./fileInput";

function ReviewForm() {
  const [values, setValues] = useState({
    title: '',
    rating: 0,
    content: '',
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    handleChange(name, value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput name="imgFile" vlaue={values.imgFile} onChange={handleChange}/>
      <input name="title" value={values.title} onChange={handleInputChange}></input>
      <input type="number" name="rating" value={values.rating} onChange={handleInputChange}></input>
      <textarea name="content" value={values.content} onChange={handleInputChange}></textarea>
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;