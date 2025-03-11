import { useState } from "react";
import "./propertyList.css";

const PropertyList = () => {
  
  const properties = [
    {
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
      title: "Hotels",
      count: "Desc"
    },
    {
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=pexels-pixabay-259588.jpg&fm=jpg",
      title: "Apartments",
      count: "Desc"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/16/03/39/home-1597079_960_720.jpg",
      title: "Resorts",
      count: "Desc"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/16/03/39/home-1597079_960_720.jpg",
      title: "Cottages",
      count: "Desc"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/16/03/39/home-1597079_960_720.jpg",
      title: "Guest Houses",
      count: "Desc"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/16/03/39/home-1597079_960_720.jpg",
      title: "Hostels",
      count: "Desc"
    }
  ];


  const [startIndex, setStartIndex] = useState(0);
  

  const displayedProperties = properties.slice(startIndex, startIndex + 4);
  
  // Handle next button click
  const handleNext = () => {
    if (startIndex + 4 < properties.length) {
      setStartIndex(startIndex + 1);
    }
  };
  
  // Handle previous button click
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="plist-container">
      {startIndex > 0 && (
        <button className="nav-button prev-button" onClick={handlePrev}>
          &lt;
        </button>
      )}
      
      <div className="plist">
        {displayedProperties.map((property, index) => (
          <div className="plistItem" key={index}>
            <img src={property.image} alt="" className="plistImg" />
            <div className="plistTitles">
              <h1>{property.title}</h1>
              <h2>{property.count}</h2>
            </div>
          </div>
        ))}
      </div>
      
      {startIndex + 4 < properties.length && (
        <button className="nav-button next-button" onClick={handleNext}>
          &gt;
        </button>
      )}
    </div>
  );
};

export default PropertyList;