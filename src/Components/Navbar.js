import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { MdFastfood } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Modal } from "react-bootstrap";

const Navbar = () => {
  const {
    totalUniqueItems,
  } = useCart();
  // for boostrap model

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // for boostrap model

  // const Searchfilter = () => {
  //   alert("is working");
  // };
  return (
    <>
      <nav class=" nav navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class=" brand navbar-brand fs-2 fw-bold" href="#">
            {" "}
            <span>
              <MdFastfood />
            </span>
            DesiTest
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="keys collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link Class="nav-link active  " to="/">
                  {" "}
                  Home
                </Link>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#"> </a> */}
                <Link Class="nav-link active  " to="/Menu">
                  Food Menu
                </Link>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">About </a> */}
                <Link Class="nav-link active  " to="/About">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link Class="nav-link active  " to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div class="d-flex">
              <li class="nav-item">
                <Link Class="nav-link active fw-bold  " to="/Cart">
                  <FaCartPlus className="cart fs-3 text-primary" /> 
                </Link>
              </li>
              <p className="cart-count">{totalUniqueItems}</p>
              <li class="nav-item">
                <div Class="nav-link active">
                  <FaUserAlt className=" text-dark fs-5" onClick={handleShow} />
                </div>
              </li>
            </div>
          </div>
        </div>
      </nav>

      {/* for show model */}
      <Modal show={show}>
        <Modal.Header className="Login-model">
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex justify-content-center Login-model">
          <form className="p-5 shadow p-3 mb-5  rounded">
          <h3 className="text-success fw-bold">LogIn</h3>
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
            
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </form>
        </Modal.Body>
        <div className="d-flex justify-content-evenly "></div>

        <Modal.Footer className="Login-model">
          <Link to={"/Registration"}>
          <button className="btn btn-primary" onClick={handleClose}>
            Registration 
          </button>
          </Link>
        </Modal.Footer>
      </Modal>


     
    </>
  );
};

export default Navbar;
