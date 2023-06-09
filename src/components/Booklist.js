import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateBook from './Books';
import { getBooks } from '../redux/books/bookSlice';
import './Books.css';

const Booklist = () => {
  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="main_books">
      {books.map((book) => (
        <li key={book.item_id}>
          <CreateBook
            title={book.title}
            author={book.author}
            id={book.item_id}

          />
        </li>
      ))}

    </div>
  );
};

export default Booklist;
