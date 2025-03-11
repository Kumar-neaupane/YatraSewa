import "./featuredproperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b8/b6/8d/hyatt-regency-kathmandu.jpg?w=1200&h=-1&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Solti Hotel</span>
        <span className="fpCity">Kathmandu</span>
        <span className="ffpPrice">$120 per day</span>
        <div className="fpRating">
          <button>7.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d3/30/81/caption.jpg?w=1200&h=-1&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Mercure Kathmandu</span>
        <span className="fpCity">Kathmandu</span>
        <span className="ffpPrice">$130 per day</span>
        <div className="fpRating">
          <button>7.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://content.skyscnr.com/available/1769326756/1769326756_WxH.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Barahi</span>
        <span className="fpCity">Kathmandu</span>
        <span className="ffpPrice">$130 per day</span>
        <div className="fpRating">
          <button>7.7</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
