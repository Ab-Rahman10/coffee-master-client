import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const lastSignInTime = result.user?.metadata?.lastSignInTime;
        const userInfo = { email, lastSignInTime };

        // detect the last sign in time
        fetch("http://localhost:5001/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              alert("Modified");
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
          <button className="btn btn-primary">Sign In</button>
        </div>
        <p>
          Are you new to COFFEE MASTER{" "}
          <Link className="text-green-700 font-semibold underline" to="/signup">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
