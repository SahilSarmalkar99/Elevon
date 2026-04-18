import React from "react";
import "./Carousel.css";
// import useFadeIn from "../hooks/useFadeIn";

import l1 from "../../assets/carousal/img1.svg"
import l2 from "../../assets/carousal/img2.svg"
import l3 from "../../assets/carousal/img3.svg"
import l4 from "../../assets/carousal/img4.svg"
import l5 from "../../assets/carousal/img5.svg"
import l6 from "../../assets/carousal/img6.svg"

const Item = [l1, l2, l3, l4, l5 ,l6];

const Carousel = () => {

  // const ref = useFadeIn();
  return (
    <div >
    

      {/* Carousel */}
    <div   className=" overflow-hidden carousel-simple ">

      <div className="group-simple">
        {Item.map((img, i) => (
          <div key={`first-${i}`} className="card-simple">
            <img src={img} alt={`tech-${i}`} />
          </div>
        ))}
      </div>

      <div aria-hidden className="group-simple">
        {Item.map((img, i) => (
          <div key={`second-${i}`} className="card-simple">
            <img src={img} alt={`tech-${i}`} />
          </div>
        ))}
      </div>

    </div>
    </div>
  );
};

export default Carousel;