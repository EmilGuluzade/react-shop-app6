import React, { useContext, useState } from "react";
import "./Cards.css";
import MainContext from "../../../context/context";
import { Link } from "react-router-dom";
const Cards = () => {
    const {data}=useContext(MainContext)
    
const [inpVal, setInpVal] = useState("");
const [sortBy, setSortBy] = useState(null);

  return (
    <section className="cards ">
      <div className="container">
        <div class="section_title text-center">
          <h1>Popular Courses</h1>
        </div>
        <div className="row d-flex ">
          <input
            value={inpVal}
            onChange={(e) => {
              setInpVal(e.target.value);
            }}
            type="text"
            placeholder="Search "
          />
          <button
            onClick={() => setSortBy({ field: "title", asc: true })}
            className="btn btn-primary mx-3  "
          >
            A-Z
          </button>
          <button
            onClick={() => setSortBy({ field: "title", asc: false })}
            className="btn btn-primary mx-3 "
          >
            Z-A
          </button>
          <button
            onClick={() => setSortBy({ field: "price", asc: false })}
            className="btn btn-primary v"
          >
            Low To High
          </button>
          <button
            onClick={() => setSortBy({ field: "price", asc: true })}
            className="btn btn-primary mx-3 "
          >
            High To Low
          </button>
        </div>
        <div className="cardss">
          {data
            .filter((x) => x.title.toLowerCase().includes(inpVal.toLowerCase()))
            .sort((a, b) => {
              if (!sortBy) {
                return 0;
              } else if (sortBy.asc == true) {
                return a[sortBy.field] > b[sortBy.field]
                  ? 1
                  : b[sortBy.field] > a[sortBy.field]
                  ? -1
                  : 0;
              } else if (sortBy.asc == false) {
                return a[sortBy.field] < b[sortBy.field]
                  ? 1
                  : b[sortBy.field] < a[sortBy.field]
                  ? -1
                  : 0;
              }
            })
            .map((item, index) => (
              <div class="col-lg-4 course_box">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={item.image}
                    alt="https://unsplash.com/@kellybrito"
                  />
                  <div class="card-body text-center">
                    <div class="card-title">
                      <Link to={`/detail/${item._id}`}>{item.title}</Link>
                    </div>
                    <div class="card-text">
                      Adobe Guide, Layes, Smart Objects etc...
                    </div>
                  </div>
                  <div class="price_box d-flex flex-row align-items-center">
                    <div class="course_author_image">
                      <img
                        src="https://preview.colorlib.com/theme/course/images/author.jpg"
                        alt="https://unsplash.com/@mehdizadeh"
                      />
                    </div>
                    <div class="course_author_name">
                      Michael Smith, <span>Author</span>
                    </div>
                    <div class="course_price d-flex flex-column align-items-center justify-content-center">
                      <span>$29</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
