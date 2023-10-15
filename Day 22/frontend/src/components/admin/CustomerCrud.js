import axios from 'axios';
import { useEffect, useState } from "react";
import './CustomerCrud.css'

function CustomerCrud() {
  const [bookid, setId] = useState('');
  const [bookname, setName] = useState("");
  const [bookauthor, setAuthor] = useState("");
  const [bookedition, setEdition] = useState("");
  const [books, setUsers] = useState([]);
  // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGFua3VAaG90bWFpbC5jb20iLCJpYXQiOjE2OTY5NTMwMDEsImV4cCI6MTY5NzAzOTQwMX0.AJxFBwxC_TAZomP6ODi9aUF5yUaoW4id1uhNQzwhNWc'; // Replace with your actual token
  const token = localStorage.getItem('token');
  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    try {
      const result = await axios.get(
        "http://localhost:8080/books/get",
        {
          headers: {
            'Authorization': `Bearer ${token}` // Include the token here
          }
        }
      );
      setUsers(result.data);
      console.log(result.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/books/post",
        {
          bookname: bookname,
          bookauthor: bookauthor,
          edition: bookedition
        },
        {
          headers: {
            'Authorization': `Bearer ${token}` // Include the token here
          }
        });
      alert("Book Registration Successfully");
      setId("");
      setName("");
      setAuthor("");
      setEdition("");
      Load();
    } catch (err) {
      alert("Book Registration Failed");
    }
  }

  async function editBook(book) {
    setName(book.bookname);
    setAuthor(book.bookauthor);
    setEdition(book.edition);
    setId(book.bid);
  }

   const DeleteBook =(bookid)=> {
    console.log(bookid)
    try {
        axios.delete(`http://localhost:8080/books/delete/${bookid}`,
        {
          headers: {
            'Authorization': `Bearer ${token}` // Include the token here
          }
        });
      alert("Book deleted Successfully");
      Load();
    } catch (err) {
      alert("Book Deletion Failed");
    }
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/books/put/${bookid}`,
        {
          bookname: bookname,
          bookauthor: bookauthor,
          edition: bookedition,
          bid: bookid // Add the bookid to the request body
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      alert("Registration Updated");
      setId("");
      setName("");
      setAuthor("");
      setEdition("");
      Load();
    } catch (err) {
      alert("Book Update Failed");
    }
  }
  return (
    <div>
      <h1>Book Details</h1>
      <div className="bigcontainer mt-4">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="bookid" hidden
              value={bookid}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label>Book Name</label>
            <input type="text" className="form-control" id="bookname"
              value={bookname}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />

            <div className="form-group">
              <label> Book Author</label>
              <input type="text" className="form-control" id="bookauthor"
                value={bookauthor}
                onChange={(event) => {
                  setAuthor(event.target.value);
                }}
              />
            </div>

          </div>
          <div className="form-group">
            <label>Book Edition</label>
            <input type="text" className="form-control" id="bookedition"
              value={bookedition}
              onChange={(event) => {
                setEdition(event.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save}>Register</button>
            <button className="btn btn-warning mt-4" onClick={update}>Update</button>
          </div>
        </form>
      </div>

      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Book Id</th>
            <th scope="col">Book Name</th>
            <th scope="col">Book Author</th>
            <th scope="col">Book Edition</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {books.map(function fn(book) {
          return (
            <tbody key={book.bookid}>
              <tr>
                <th scope="row">{book.bid} </th>
                <td>{book.bookname}</td>
                <td>{book.bookauthor}</td>
                <td>{book.edition}</td>
                <td>
                  <button type="button" className="btn btn-warning" onClick={() => editBook(book)}>Edit</button>
                  <button type="button" className="btn btn-danger" onClick={() => DeleteBook(book.bid)}>Delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default CustomerCrud;
