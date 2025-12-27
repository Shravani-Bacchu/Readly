import { useState } from 'react';

export default function MyForm() {
  const [bookName, setBookName] = useState("");
  const [bookReview, setBookReview] = useState("");

  function handleNameChange(e) {
    setBookName(e.target.value);
  }

  function handleReviewChange(e) {
    setBookReview(e.target.value);
  }

  return (
    <form>
      <label>
        Book Title:
        <input
          type="text"
          value={bookName}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Book Review:
        <input
          type="text"
          value={bookReview}
          onChange={handleReviewChange}
        />
      </label>
    </form>
  );
}