import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  //   delete user
  const handleDelete = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-master-server-l0w6bzmwv-ab-rahmans-projects.vercel.app/users/${userId}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              const remainingUsers = users.filter(
                (user) => user._id !== userId
              );
              setUsers(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div className="w-10/12 mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-center my-3">
          All Users: {users.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Cerated At</th>
                <th>Last sign in</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* row 1 */}
            {users.map((user) => (
              <tbody key={user._id}>
                <tr>
                  <th>1</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.creationTime}</td>
                  <td>{user.lastSignInTime}</td>
                  <td className="space-x-2">
                    <Link>
                      <button className="btn">Edit</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn"
                    >
                      x
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
