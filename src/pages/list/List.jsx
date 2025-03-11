import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";

function List() {
  const location = useLocation();
  
  const [destination, setDestination] = useState(location.state?.destination || "");
  const [date, setDate] = useState(location.state?.date || [{ 
    startDate: new Date(), 
    endDate: new Date(), 
    key: "selection" 
  }]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || { 
    adult: 1, 
    children: 0, 
    room: 1 
  });

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="ListContainer">
        <div className="ListWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input 
                type="text" 
                placeholder={destination || "Where are you going?"} 
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">MinPrice<small>per night</small></span>
                <input type="number" min={0} className="lsOptionInput"/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">MaxPrice<small>per night</small></span>
                <input type="number" min={0} className="lsOptionInput"/>
              </div>
              
              <div className="lsOptionItem">

                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.room}
                />
              </div>
            </div>
            <button className="lsSearchBtn">Search</button>
          </div>
          
          <div className="listResult">
            {/* Search results will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;