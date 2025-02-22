import React from "react";

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center text-danger">Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          New user? <a href="/register" className="text-danger">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
