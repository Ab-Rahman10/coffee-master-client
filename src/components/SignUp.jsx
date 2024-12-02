import React, { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const creationTime = result.user.metadata.creationTime;
        const newUser = { name, email, creationTime };
        // save new user info in database
        fetch(
          "https://coffee-master-server-l0w6bzmwv-ab-rahmans-projects.vercel.app/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              alert("New user created successfully!");
            }
          });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
