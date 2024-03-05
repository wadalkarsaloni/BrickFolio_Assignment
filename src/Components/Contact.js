import React from "react";
const Contacts = () => {
  return (
    <> <div className="contacts py-5">
      
    
      <div  className="py-5">
        <iframe className="py-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.404328340048!2d73.81548731468828!3d18.51062198741476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbd8d5112df%3A0x40888f31c5f88b84!2sFelix%20IT%20Systems!5e0!3m2!1sen!2sin!4v1673588134082!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container  py-5">
        <div className="contact">
          <form action="https://formspree.io/f/mbjejnzb"  method="POST">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                UserName
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="username"
                autoComplete="off"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                Email
              </span>
              <input
                type="Email"
                class="form-control"
                placeholder="Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="Email"
                autoComplete="off"
              />
            </div>

            <div class="mb-3 text-center">
              <label for="exampleFormControlTextarea1" class="form-label">
                Your Response
              </label>
              <textarea
              placeholder="Enter Your Response Here"
                class="form-control "
                id="exampleFormControlTextarea1"
                rows="3" name="message"
                autoComplete="off"
              ></textarea> <br/>
              <button type="submit" class="btn btn-success fs-4 ">Submit</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contacts;