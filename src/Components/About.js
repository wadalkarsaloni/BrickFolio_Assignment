import React from "react";



const About = () => {
  return (
    <>
      <div class=" about container d-flex justify-content-between py-5">
        <div class="row py-5">
          <div class="col-lg-6 py-5">
            <img
              src="https://www.usatoday.com/gcdn/-mm-/8e0a7b669a4693059e7cf235ad9592a17b24b7dc/c=0-250-1987-1257/local/-/media/USATODAY/USATODAY/2013/10/18/1382125385002-4-CHI-lobster-hash-CastleHillInn.jpg?width=1987&height=1007&fit=crop&format=pjpg&auto=webp"
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <p className="fw-bold fs-5">
              A food menu website is a platform that showcases various food
              items and their details, allowing users to browse and select items
              they want to order or learn more about. Here are some key features
              and components commonly found in food menu websites:
            </p>
            <p className="fs-5 fw-bold text-secondary">
              1.Food Item Listings: The website displays a list of food items
              available for ordering. Each item is typically accompanied by an
              image, name, price, and brief description.
            </p>

            <p className="fs-5 fw-bold text-secondary">
              2.Search and Filter: Users can search for specific food items or
              apply filters to narrow down their choices. Filters may include
              categories, dietary preferences
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <p className="fw-bold fs-4">
            These are some of the common features you can find on a food menu
            website. However, the specific design, functionality, and additional
            features can vary depending on the purpose, target audience, and
            goals of the website.
          </p>
        </div>
        </div>
       
    </>
  );
};

export default About;
