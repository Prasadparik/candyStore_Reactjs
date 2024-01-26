import React from "react";
import BannerImage from "../../assets/icons/banner.jpg";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <img src={BannerImage} className="BannerImage" alt="Banner" />
      <div className="summary">
        <b>Delicious Food, Delivered To You</b>
        <p>
          "Indulge in a culinary journey with our delectable offerings of
          delicious food, meticulously crafted and delivered straight to your
          doorstep. Savor the flavors of excellence as we bring the restaurant
          experience to the comfort of your home. Elevate your dining experience
          with our curated menu, designed to delight your taste buds and make
          every meal a memorable celebration."
        </p>
      </div>
    </div>
  );
}

export default Banner;
