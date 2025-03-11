import "./searchitem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://imgs.search.brave.com/aaGjATgMLzu2-716X23Xv7zt2b9YkghKx-cX6DTazCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg3/MzYzMzM3L3Bob3Rv/L21vZGVybi1ob3Rl/bC1idWlsZGluZy1p/bi1zdW1tZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWVS/VkRjYWRaVEtzNXQy/Sy1DRWVYVDZEaUpR/NjhGbmJzNnU5Ri0w/U192OFE9"
        alt="Tower Street Apartments"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <div className="siTags">
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
        </div>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² • 1 full bed
        </span>
        <div className="siCancelContainer">
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span className="siRatingText">Excellent</span>
          <button className="siRatingNumber">8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;