import React from "react";

const Register = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center text-success">Register</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter full name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Create password" />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <a href="/login" className="text-success">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
