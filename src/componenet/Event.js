import "./Event.css";
import { useState } from "react";
import axios from "axios";

function Event() {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9500/event", {
        category,
        date,
        location,
      });
    } catch (e) {
      console.log(e);
    }

    // let Basic = async (e) => {
    //   e.preventDefault();
    //   try {
    //     await axios.post("http://localhost:9000/event", {
    //       type,
    //       date,
    //       location,
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };

    if (edit) {
      let copy = users;
      Object.assign(copy[active], user);
      setUsers([...copy]);
      setEdit(false);
      setActive(null);
    } else {
      setUsers([...users, user]);
    }
    setCategory("");
    setDate("");
    setLocation("");
  };

  const onEditClick = (index) => {
    const user = users[index];
    setCategory(user.category);
    setDate(user.date);
    setLocation(user.location);
    setActive(index);
    setEdit(true);
  };

  const deleteUser = (user) => {
    if (window.confirm("Are u sure to delete")) {
      let copy = users.filter((item) => item != user);
      setUsers([...copy]);
    }
  };

  return (
    <div className="App">
      <h1>EVENT DETAIL</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={saveUser}>
              <div className="form-group">
                <label htmlFor="">Category</label>
                <input
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Location</label>
                <input
                  type="text"
                  className="form-control"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <button className="btn btn-sucess form-control">
                {" "}
                {edit ? "update" : "save"}
              </button>
            </form>
            <button type="submit" onClick={saveUser}>
              Next{" "}
            </button>{" "}
          </div>
        </div>
      </div>

      <table className="table table-borderd mt-5">
        <thead>
          <tr>
            <th>Category</th>
            <th>Date</th>
            <th>Location</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{user.category}</td>
                <td>{user.date}</td>
                <td>{user.location}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => onEditClick(index)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Event;
