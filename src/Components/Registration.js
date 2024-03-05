import React from "react";
import { Link } from "react-router-dom";


const Loginform = () => {
  return (
    <>  
    
      <div className="conatainer py-5 Ragister ">
        <form className="p-5 shadow p-3 mb-5 rounded ">
          <h3 className="text-success fw-bold">Ragriter User</h3>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              User Name
            </label>
            <input
              placeholder="Enter Usename"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              placeholder="Enter your email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              placeholder="Password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <Link to={"/Menu"}>
          <button type="submit" class="btn btn-primary">
            Ragister
          </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Loginform;
