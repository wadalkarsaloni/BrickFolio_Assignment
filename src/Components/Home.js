import React from "react";
import {Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div class="container d-flex justify-content-center py-5">
        <div class="row py-5">
          <div class="col-md-6 d-flex justify-content-center  flex-column">
            <div className="content  ">
              <span className="slogon">Welcome to the heaven of food</span>
              <h3>Enjoy your meal</h3>
              <p>Best food in the world is ready to get served to you</p>

                <Link to={"/Menu"}>
              <button >
              order now
                
              </button>
                </Link>
            </div>
          </div>
          <div class="col-md-6 hero py-5">
            <div className="image img-fluid">
              <img src="../assets/imgs/home-img-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
