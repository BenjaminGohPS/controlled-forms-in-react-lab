import React, { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    //code block here
    // setNewBook(event.target.value);
    // setNewBook((prevState) => [...prevState, {[event.target.name]: event.target.value}])
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevState) => [...prevState, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <div className="bookshelfDiv">
      <form onSubmit={handleSubmit}>
        <div className="formDiv">
          <h3>Add a Book</h3>
          {/* Form will go here */}
          <div className="row">
            <label htmlFor="title">Title: </label>

            <input
              name="title"
              type="text"
              placeholder="Title"
              onChange={handleInputChange}
              value={newBook.title}
            />
          </div>

          <div className="row">
            <label htmlFor="author">Author: </label>
            <input
              name="author"
              type="text"
              placeholder="Author"
              onChange={handleInputChange}
              value={newBook.author}
            />
            {/* {JSON.stringify(newBook)} */}
          </div>

          <div>
            <button type="submit" onSubmit={handleSubmit}>
              Add Book
            </button>
          </div>
        </div>
      </form>
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

/**
need to map through the array else how to get the data?

*/
