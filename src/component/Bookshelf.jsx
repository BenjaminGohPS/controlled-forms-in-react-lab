import React, { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const [errors, setErrors] = useState({ title: "", author: "" });

  const formIsInvalid = Object.values(errors).some(Boolean);
  const formHasMissingDate = !Object.values(newBook).every(Boolean);

  const handleInputChange = (event) => {
    // another method: setNewBook((prevState) =>({...prevState, [event.target.name]: event.target.value}))
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
    checkErrors(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevState) => [...prevState, newBook]);
    setNewBook({ title: "", author: "" });
  };

  const checkErrors = ({ target }) => {
    if (target.name === "title") {
      setErrors({
        ...errors,
        title:
          target.value.length < 1
            ? "Your title must be at least 1 character long"
            : "",
      });
    }
    if (target.name === "author") {
      setErrors({
        ...errors,
        author:
          target.value.length < 2
            ? "Your author must be at least 2 character long"
            : "",
      });
    }
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {/* Form will go here */}

        <form onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="title">Title: </label>

            <input
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              onChange={handleInputChange}
              value={newBook.title}
            />
            {errors.title && <p className="error">{errors.title}</p>}
          </div>

          <div className="row">
            <label htmlFor="author">Author: </label>
            <input
              id="author"
              name="author"
              type="text"
              placeholder="Author"
              onChange={handleInputChange}
              value={newBook.author}
            />
            {errors.author && <p className="error">{errors.author}</p>}
          </div>

          <div>
            <button
              type="submit"
              disabled={formIsInvalid || formHasMissingDate}
            >
              Add Book
            </button>
          </div>
        </form>
      </div>

      <div className="bookCardsDiv">
        <div>
          {books.map((item, idx) => {
            return (
              <div className="bookCard" key={idx}>
                <div>{item.title}</div>
                <div>by: {item.author}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
