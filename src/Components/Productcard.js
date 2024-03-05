import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { useCart } from "react-use-cart";
import { Modal } from "react-bootstrap";

const Productcard = (props) => {
  // for boostrap model

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // for boostrap model

  //............add cart
  const { addItem } = useCart();

  return (
    <>
      <div className="col-lg-3 py-3 d-flex justify-content-center">
        <div
          class="card item p-2 shadow p-3 mb-5 bg-body rounded"
          style={{ width: "18rem" }}
        >
          <div onClick={handleShow}>
            <img src={props.img} class="card-img-top" alt="..." />
          </div>
          <div class="card-body ">
            <h5 class="card-title title fw-bold">{props.name}</h5>
            <h5 class="card-title title  fs-6 text-end">
              Rating{props.rating}
            </h5>
            <p className="text-secondary fw-bold">
              Best food with delicious test.
            </p>
            <div className="d-flex  fs-5 justify-content-between">
              <p class="text-dark  type">
                Type-<span className="fw-bold p-1 ">{props.type}</span>
              </p>
              <p class="card-title catagory">
                Cata- <span className="fw-bold p-1 ">{props.category}</span>{" "}
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bold">Price</p>
              <p>
                <BiRupee />
                {props.price}
              </p>
            </div>
          </div>
          <div class="d-grid gap-2">
            <button
              onClick={() => addItem(props.item)}
              class="btn btn-warning fw-bold fs-6"
              type="button"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>


       {/* for show model */}
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <p className="text-center fw-bold text-secondary">
          {" "}
          Best food with delicious test.
        </p>

        <Modal.Body className="d-flex justify-content-center">
          <img
            src={props.img}
            style={{ height: "400px", width: "400px" }}
            className="img-fluid"
          />
        </Modal.Body>
        <div className="d-flex justify-content-evenly ">
          <p className="fw-bold">Price-</p>
          <p>
            {" "}
            <BiRupee />
            {props.price}
          </p>
          <p className="fw-bold">Category-</p>
          <p>{props.category}</p>
        </div>

        <Modal.Footer>
          <button className="btn btn-success" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Productcard;
