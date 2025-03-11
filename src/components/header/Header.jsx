import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCarSide,
  faHotel,
  faPerson,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]:
        operation === "increase"
          ? prev[name] + 1
          : Math.max(name === "children" ? 0 : 1, prev[name] - 1),
    }));
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faHotel} />
            <span>Hotels</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCarSide} />
            <span>Cars</span>
          </div>
        </div>
        <h1 className="headerTitle">YatraSewa – Your Journey, Our Service</h1>
        <h2 className="headerTitle">
          Unlock a 10% Discount on Your First Trip with YatraSewa! 🌟
        </h2>
        <p className="headerDes">
          Join YatraSewa today and experience a seamless journey at unbeatable
          prices. Get 10% OFF when you create your YatraSewa account now!
        </p>
        <button className="headerBtn">Login / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <input
              type="text"
              placeholder="Where would you like to go?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              className="headerSearchText"
              onClick={() => setOpenOptions(!openOptions)}
            >
              {`${options.adult} adult · ${options.children} children · ${options.room} room`}
            </span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "decrease")}
                      disabled={options.adult <= 1}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "increase")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "decrease")}
                      disabled={options.children <= 0}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "increase")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "decrease")}
                      disabled={options.room <= 1}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "increase")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
