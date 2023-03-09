import "./Basic.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Basic() {
  const navigate = useNavigate();
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [raddress, setResidentialAddress] = useState("");
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);
  // const saveUser = async (event) => {
  //   e.preventDefault();
  const user = {
    fname,
    lname,
    email,
    raddress,
  };

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/basic", {
        fname,
        lname,
        email,
        raddress,
      });
    } catch (e) {
      console.log(e);
    }
    navigate(`/event`);

    // let form = async (e) => {
    //   e.preventDefault();
    //   try {
    //     await axios.post("http://localhost:9500/basic", {
    //       fname,
    //       lname,
    //       email,
    //       raddress,
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   // console.log("Logging in with email:", email, "and password:", password);
    //   navigate(`/Login`);
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
    setFirstName("");
    setLastName("");
    setEmail("");
    setResidentialAddress("");
  };

  const onEditClick = (index) => {
    const user = users[index];
    setFirstName(user.fname);
    setLastName(user.lname);
    setEmail(user.email);
    setResidentialAddress(user.raddress);
    setActive(index);
    setEdit(true);
  };

  const deleteUser = (user) => {
    if (window.confirm("Are u sure to delete")) {
      let copy = users.filter((item) => item !== user);
      setUsers([...copy]);
    }
  };

  return (
    <div className="Basic">
      <h1>PERSONAL INFORMATION</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={saveUser}>
              <div className="form-group">
                <label htmlFor="">FirstName</label>
                <input
                  type="text"
                  id="basic-fname"
                  className="form-control"
                  value={fname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">LastName</label>
                <input
                  type="text"
                  id="basic-lname"
                  className="form-control"
                  value={lname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  id="basic-email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">ResidentialAddress</label>
                <input
                  type="text"
                  id="basic-raddress"
                  className="form-control"
                  value={raddress}
                  onChange={(e) => setResidentialAddress(e.target.value)}
                />
              </div>
              <button className="btn btn-sucess form-control">
                {edit ? "update" : "save"}
              </button>
            </form>
            {/* <button className="btn  control">Next --></button> */}
            {/* <button type="submit" onClick={login}>
              Next
            </button> */}
            <button type="submit" onClick={saveUser}>
              Next{" "}
            </button>
          </div>
        </div>
      </div>

      <table className="table table-borderd mt-5">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>ResidentialAddress</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.raddress}</td>
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
export default Basic;
