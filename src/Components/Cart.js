import React from "react";
import { useCart } from "react-use-cart";
import { AiFillMinusSquare } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { AiFillPlusSquare } from "react-icons/ai";
// for  stripe payment
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  // for tokan 
  const onToken =(token)=>{
    console.log(token)
  }

  const checkout = () => {
    alert("order  placed succefully");
  };

  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty)
    return (
      <>
        {/* empty cart code  */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row py-5">
              <div className="col-md-12 py-4">
                <p className="text-primary fs-3 fw-bold">Your Shopping Cart </p>
                <hr style={{ height: "2px" }} />
              </div>
              <div className="row-md-12">
                <p className="text-center mt-5 fs-2">
                  {" "}
                  You have no items in your shopping cart
                </p>
                <div className="text-center">
                  <a
                    href="/"
                    className="btn btn-outline-success fw-bolder fs-5"
                  >
                    Continue Shopping
                  </a>
                </div>
                <hr className="mt-5" style={{ height: "2px" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid  mt-5">
          <hr />
          <p className="text-center  fs-5">
            Need some help?<span className="text-primary"> Chat now</span> or
            call 0123-456-789
          </p>
          <hr />

          <div className="container mx-5  py-5">
            <div className="row d-flex justify-content-center  ">
              <div
                className="col-md-8 new-arrival mb-5"
                style={{ height: "56vh" }}
              >
                <div className="  col-md-4 mt-5 ms-5 Newarrival-img img-fluid ">
                  <p className="let text-center text-light fs-1 fw-bold mt-5">
                    Your Favoraite Food is here!
                  </p>
                  <h5 className=" let text-center text-primary fs-3 fw-bold ">
                    Check out the delisius Food .
                  </h5>
                  <div className="text-center  fw-bolder fs-5">
                    <a
                      style={{ textDecoration: "none" }}
                      className=" let text-warning fs-1 fw-bold"
                      href="/Menu"
                    >
                      Order now &#x1F6D2;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* empty cart code  ends  */}
      </>
    );

  return (
    <>
      <div className="container mx-5 d-flex justify-content-center flex-column py-5 ">
        <h1 className="fs-3 text-primary py-5">
          Your Shopping Cart ({totalUniqueItems})
        </h1>
        <hr />
        <div className="container py-5 ">
          <div className="row  py-2">
            <div className="col-md-4">
              <p className="fw-bold text-uppercase  ms-4">Product</p>
            </div>
            <div className="col-md-2">
              <p className="fw-bold text-uppercase">Unit Price</p>
            </div>
            <div className="col-md-2">
              <p className="fw-bold text-uppercase ms-4">quantity</p>
            </div>
            <div className="col-md-2">
              <p className="fw-bold text-uppercase text-uppercase ms-5">
                total
              </p>
            </div>
          </div>
          {items.map((item) => (
            <>
              <div className="container py-2 m-2 shadow-lg p-3 mb-5 rounded">
                <div className="row">
                  <div className="col-md-1">
                    <img src={item.img} width={"100px"} />
                  </div>
                  <div className="col-md-2 fw-bold">
                    {item.Brand_Name}
                    <div className="remove-button mt-3">
                      <button
                        className="text-danger fw-bold"
                        style={{ border: "none" }}
                        onClick={() => removeItem(item.id)}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="unit-price text-center fw-bold">
                      <p className="mt-3">₹ {item.price}</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="quantity mt-1 text-center ">
                      <div className="row">
                        <div className="col-md-6   fs-5">
                          <p className="mt-3"> {item.quantity}</p>
                        </div>
                        <div className="col-md-4 border-box mt-2 incement ">
                          <div
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <AiFillPlusSquare />
                          </div>
                          <div
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <AiFillMinusSquare />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <p className="text-center fw-bold mt-3">
                      ₹ {item.price * item.quantity}
                    </p>
                  </div>
                </div>
                {/* <hr /> */}
              </div>
            </>
          ))}
        </div>

        <div className="container my-5">
          <div className="row d-flex justify-content-center ">
            <div className="col-md-6 " style={{ backgroundColor: "GrayText" }}>
              <h4 className="text-warning fw-bold ">Order Summary</h4>

              <div className="sub-total">
                <p className="text-uppercase fw-bold text-info">
                  Item sub total:-
                  <BiRupee /> {cartTotal}
                </p>
              </div>
              <div className="shipping">
                <p className="text-uppercase fw-bold text-info ">
                  Shipping :- Free
                </p>
              </div>
              <hr />

              <div className="grand-total">
                <p className="text-uppercase fw-bold text-info">
                  Grand total:-
                  <BiRupee /> {cartTotal}
                </p>
              </div>
              <div className="tax">
                <p>
                  * Actual tax will be calculated when your order is processed.
                  Tax may vary slightly from what is displayed here.
                </p>
              </div>
              <div className="checkout text-center mt-3 mb-3 d-flex justify-content-evenly">
                <StripeCheckout
                 
                  token={onToken}
                  name="DesiTest Food Menu Application"
                  currency="INR"
                  amount={cartTotal*100}
                  stripeKey="pk_test_51NDKSeSB6FICkqZ9zdEGMfmwei24xsFfnfqWtTuWND5HFPR3LhgQFaZNM6Puuve3slLfQDFEMJVZxZgyH81VbWvT00ZZLXxp0Y"
                />
                <button
                  onClick={checkout}
                  className="btn bg-primary text-white text-uppercase fw-bolder  "
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
