import React, { useState } from "react";
import Productcard from "./Productcard";
import Foodapi from "./Foodapi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
// import Multifilter from "./Multifilter"

const Menu = () => {
  const [data, setData] = useState(Foodapi);
  const [searchQuery, setSearchQuery] = useState("");
  

  // function category
  const filterResult = (CatItem) => {
    const result = Foodapi.filter((curData) => {
      return curData.category === CatItem;
    });
    setData(result);
  };

  // function for type
  const filterType = (itemType) => {
    const FoodType = Foodapi.filter((curType) => {
      return curType.type === itemType;
    });
    setData(FoodType);
  };
  //  function for low to high
  const sortPricesLowToHigh = () => {
    // alert("working")
    const sortedPrices = [...Foodapi].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setData(sortedPrices);
  };

  //function for high to low
  const sorthightolow = () => {
    // alert("working")
    const hightolowprice = [...Foodapi].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    setData(hightolowprice);
  };

  //  function for search button

  const handleSearch = (event) => {
    event.preventDefault();
    const results = Foodapi.filter((search) =>
      search.itemname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(results);
  };

  return (
    <>
      <demo />
      <div class="menu container-fluid py-5 ">
        <div class="row py-5 ">
          <div class="col-lg-3 sidebar mt-5 side-buttons  ">
            {/* search bar */}
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Serach Your Choise "
                aria-label="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                class="btn btn-success"
                type="submit"
                onClick={handleSearch}
              >
                Search
              </button>
            </form>
            {/* search bar */}

            {/* Category buttons */}
            <h3 className="text-success tag-line">
              Select What You Want ! <BsFillEmojiSmileFill />
            </h3>
           

            <button
              type="button"
              class="btn btn-warning w-100  mb-4"
              onClick={() => setData(Foodapi)}
            >
              All
            </button>
            <button
              type="button"
              class="btn btn-warning w-100  mb-4"
              onClick={() => filterResult("Bread")}
            >
              Bread
            </button>
            <button
              type="button"
              class="btn btn-warning w-100 mb-4"
              onClick={() => filterResult("Main course")}
            >
              Main-Course
            </button>
            <button
              type="button"
              class="btn btn-warning w-100 mb-4"
              onClick={() => filterResult("Snacks")}
            >
              Snacks
            </button>
            <button
              type="button"
              class="btn btn-warning w-100 mb-4"
              onClick={() => filterResult("Starters")}
            >
              Starters
            </button>
            <button
              type="button"
              class="btn btn-warning w-100 mb-4"
              onClick={() => filterResult("Dessert")}
            >
              Dessert
            </button>
            <button
              type="button"
              class="btn btn-warning w-100 mb-4"
              onClick={() => filterResult("Beverages")}
            >
              Beverages
            </button>
           
          </div>
          {/* Category buttons */}
          <div class="col-lg-9  contant ">
            <div className="row ">
              <p className=" text-center fs-2 fw-bold">
                <div className="text-success mt-5 text-menu">
                  <ImSpoonKnife />
                  Food Menu
                  <ImSpoonKnife />
                </div>
                {/* <Multifilter3> */}
                <div className="type-buttons container d-flex justify-content-center mt-5">
                  <div className="row">
                    <p>Select Your Favorite Food</p>
                    <div className="col-lg-3">
                      <div>
                        <img
                          src="https://t3.ftcdn.net/jpg/05/39/10/88/360_F_539108874_TrOLQefDaUm5UkUpgDgniGXBPcy05JMF.jpg"
                          alt=""
                          onClick={() => filterType("N-veg")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div>
                        <img
                          src="https://t3.ftcdn.net/jpg/05/33/16/84/360_F_533168476_ZwcHp3VXYOAr8RaAHxt2p1FwT0TbXTzj.jpg"
                          alt=""
                          onClick={() => filterType("veg")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div>
                        <img
                          src="https://media.istockphoto.com/id/1150997960/vector/home-cooked-food-fried-eggs-fried-eggs-in-frying-pan-healthy-breakfast-home-cooking.jpg?s=612x612&w=0&k=20&c=jJDj6J2P3c59eMWF4miOGyVc83f6w65pU6MRFXVfpDs="
                          alt=""
                          onClick={() => filterType("Egg")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          SortItems
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              class="dropdown-item"
                              href="#"
                              onClick={sortPricesLowToHigh}
                            >
                              Price Low to High
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="#"
                              onClick={sorthightolow}
                            >
                              Price High to Low
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
              {data.map((cval, index) => {
                return (
                  <>
                    <Productcard
                      item={cval}
                      rating={cval.rating}
                      img={cval.img}
                      id={cval.id}
                      name={cval.itemname}
                      type={cval.type}
                      price={cval.price}
                      category={cval.category}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
