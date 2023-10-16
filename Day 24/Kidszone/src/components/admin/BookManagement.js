import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookManagement.css';

const API_URL = 'http://localhost:8080/books'; // Replace with your API URL
const token = localStorage.getItem('token'); // Get the token from localStorage

const BookManagement = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    bid: '',
    bookname: '',
    bookauthor: '',
    edition: '',
    bookdescription: '',
    imgURL: '',
    booksCategory: '',
  });

  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${API_URL}/get`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data)
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (selectedBook) {
        await axios.put(
          `${API_URL}/put/${selectedBook.bid}`,
          newBook,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
      } else {
        await axios.post(`${API_URL}/post`, newBook, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }

      fetchBooks();
      setNewBook({
        bid: '',
        bookname: '',
        bookauthor: '',
        edition: '',
        bookdescription: '',
        imgURL: '',
        BookCategory: '',
      });
      setSelectedBook(null);
    } catch (error) {
      console.error('Error adding/updating book:', error);
    }
  };

  const handleUpdateClick = (book) => {
    setSelectedBook(book);
  };

  useEffect(() => {
    setNewBook({
      id: selectedBook ? selectedBook.bid : '',
      name: selectedBook ? selectedBook.bookname : '',
      author: selectedBook ? selectedBook.bookauthor : '',
      edition: selectedBook ? selectedBook.edition : '',
      description: selectedBook ? selectedBook.bookdescription : '',
      url: selectedBook ? selectedBook.imgURL : '',
      category: selectedBook ? selectedBook.booksCategory : '',
    });
  }, [selectedBook]);

  const handleDelete = async (bid) => {
    try {
      await axios.delete(`${API_URL}/delete/${bid}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const filteredBooks = books.filter((book) => {
    if (newBook && newBook.name) {
      return book.bookname.toLowerCase().includes(newBook.name.toLowerCase());
    }
    return true;
  });

  return (
    <div className="container">
      <h1 className="title">Book Management</h1>
      <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="input"
                placeholder="Book ID"
                name="id"
                value={newBook.id}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="input"
                placeholder="Book Name"
                name="name"
                value={newBook.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="input"
                placeholder="Author"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="input"
                placeholder="Edition"
                name="edition"
                value={newBook.edition}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="input"
                placeholder="Description"
                name="description"
                value={newBook.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="input"
                placeholder="Image URL"
                name="url"
                value={newBook.urL}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="input"
                placeholder="Category"
                name="category"
                value={newBook.category}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="button">
              {selectedBook ? 'Update Book' : 'Add Book'}
            </button>
          </form>
        </div>
        <div className="column">
          <ul className="book-list">
            {filteredBooks.map((book) => (
              <li key={book.bid} className="book-item">
                <h5>{book.bookname}</h5>
                <p>ID: {book.bid}</p>
                <p>Author: {book.bookauthor}</p>
                <p>Edition: {book.edition}</p>
                <p>Description: {book.bookdescription}</p>
                <p>Image : {book.imgURL}</p>
                <p>Category: {book.bookCategory}</p> 

                <button
                  className="button"
                  onClick={() => handleUpdateClick(book)}
                >
                  Update
                </button>
                <br />
                <button
                  className="button"
                  onClick={() => handleDelete(book.bid)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookManagement;
