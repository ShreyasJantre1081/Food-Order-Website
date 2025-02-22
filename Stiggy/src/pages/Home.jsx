import React from "react";

const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4 text-danger">Welcome to Stiggy! 🍔</h1>
      <p className="lead">
        Order delicious meals from your favorite restaurants, delivered fast!
      </p>
      
      <div className="mt-4">
        <a href="/login" className="btn btn-danger me-2">
          Login
        </a>
        <a href="/register" className="btn btn-outline-danger">
          Register
        </a>
      </div>
    </div>
  );
};

export default Home;
