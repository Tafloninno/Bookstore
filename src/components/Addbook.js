import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBooks } from '../redux/books/bookSlice';
import './Addbook.css';
import Books from './Books';

const Addbook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBooks({
      item_id: nanoid(),
      title,
      author,
      category: null,

    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <Books />
      <hr className="line" />
      <div className="new_book">
        <h2>ADD NEW BOOK</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
};

export default Addbook;
