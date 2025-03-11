import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredBadge">Most Popular</div>
        <img
          src="https://www.nepalsanctuarytreks.com/wp-content/uploads/2018/09/5148063265_00f0e94f3b_o-scaled.jpg"
          alt="Pokhara, Nepal"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pokhara</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <div className="featuredBadge">Popular</div>
        <img
          src="https://media.istockphoto.com/id/499654668/photo/sunset-over-patan-durbar-square-in-kathmandu-nepal.jpg?s=612x612&w=0&k=20&c=EgIqUy0EdoZPiaq_8sE2AXbgmMihZRpxgo638hzI4Hg="
          alt="Kathmandu, Nepal"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kathmandu</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.nepalliontours.com/wp-content/uploads/2017/04/1-1.jpg"
          alt="Chitwan, Nepal"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Chitwan</h1>
          <h2>89 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;