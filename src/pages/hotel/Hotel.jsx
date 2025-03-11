import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLocationDot, 
  faCar, 
  faStar, 
  faCircleXmark, 
  faCircleArrowLeft, 
  faCircleArrowRight,
  faTimes 
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";


const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [iconsLoaded, setIconsLoaded] = useState(false);
    
   
    useEffect(() => {
        
        setTimeout(() => {
            setIconsLoaded(true);
        }, 100);
    }, []);
    
    const photos = [
        {
            src: "https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/elegant-living-room-featuring-modern-sofa-and-decor/modern-living-room-with-sofa-and-decor.jpg",
        },
        { src: "https://st.hzcdn.com/simgs/97910d6b0407c3d1_14-0485/_.jpg" },
        {
            src: "https://media.istockphoto.com/id/1535511484/photo/tv-cabinet-in-a-scandinavian-decor-living-room.jpg?s=612x612&w=0&k=20&c=mGtquet42E389LKmrGam7dWIAGDEZGF2N0M0FwZspFk=",
        },
        { src: "https://st.hzcdn.com/simgs/97910d6b0407c3d1_14-0485/_.jpg" },
        { src: "https://st.hzcdn.com/simgs/97910d6b0407c3d1_14-0485/_.jpg" },
        {
            src: "https://hips.hearstapps.com/hmg-prod/images/sarah-storms-photo-by-brian-wetzel-01-76-6682ea910395c.jpg?crop=1xw:0.844090084643289xh;center,top&resize=1200:*",
        },
        { src: "https://st.hzcdn.com/simgs/97910d6b0407c3d1_14-0485/_.jpg" },
    ];
    
    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleMove = (direction) => {
        let newSlideNumber;
        
        if (direction === "left") {
            newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
        }
        
        setSlideNumber(newSlideNumber);
    };

    return (
        <div className="hotel-container">
            {open && (
                <div className="slider" onClick={handleClose}>
                    {/* Close button with enhanced styling and multiple options */}
                    <div 
                        className="close-button"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClose();
                        }}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            zIndex: 1001,
                            cursor: 'pointer',
                            background: 'rgba(0, 0, 0, 0.5)',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <FontAwesomeIcon 
                            icon={faCircleXmark} 
                            style={{
                                fontSize: '30px',
                                color: 'white',
                            }}
                        />
                        
                        <span 
                            style={{
                                position: 'absolute',
                                fontSize: '24px',
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >
                            X
                        </span>
                    </div>
                    
                    <FontAwesomeIcon 
                        icon={faCircleArrowLeft} 
                        className="arrow" 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleMove("left");
                        }}
                        style={{
                            margin: '20px',
                            fontSize: '30px',
                            color: 'white',
                            cursor: 'pointer',
                            zIndex: 1000
                        }}
                    />
                    <div className="sliderWrapper" onClick={(e) => e.stopPropagation()}>
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon 
                        icon={faCircleArrowRight} 
                        className="arrow" 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleMove("right");
                        }}
                        style={{
                            margin: '20px',
                            fontSize: '30px',
                            color: 'white',
                            cursor: 'pointer',
                            zIndex: 1000
                        }}
                    />
                </div>
            )}
            <Navbar />
            <Header type="list" />
            <div className="hotel-wrapper">
                <div className="hotel-header">
                    <div className="hotel-title-area">
                        <h1 className="hotel-title">Grand Hotel</h1>
                        <div className="hotel-address">
                            <FontAwesomeIcon icon={faLocationDot} className="hotel-icon" />
                            <span>This is address</span>
                        </div>
                        <span className="hotel-distance">
                            Excellent location - 500m from center
                        </span>
                        <span className="hotel-promo">
                            <FontAwesomeIcon icon={faCar} className="hotel-icon" />
                            Book a Hotel over rs 15000 and get a free airport taxi
                        </span>
                    </div>
                    <button className="hotel-reserve-btn">Reserve Now</button>
                </div>

                <div className="hotel-images">
                    {photos.map((photo, i) => (
                        <div className="hotel-img-wrapper" key={i}>
                            <img 
                                src={photo.src} 
                                alt="Hotel Interior" 
                                className="hotel-img" 
                                onClick={() => handleOpen(i)}
                            />
                        </div>
                    ))}
                </div>

                <div className="hotel-details">
                    <div className="hotel-details-left">
                        <h2 className="hotel-name">Solti hotel</h2>
                        <div className="hotel-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FontAwesomeIcon 
                                    key={star} 
                                    icon={faStar} 
                                    className="hotel-star" 
                                />
                            ))}
                        </div>
                        <p className="hotel-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                    </div>

                    <div className="hotel-details-right">
                        <div className="hotel-details-price">
                            <h3>Perfect for 1 months stay</h3>
                            <span>
                                <FontAwesomeIcon icon={faLocationDot} className="hotel-icon" />
                                Location is good
                            </span>
                            <h2>
                                <b>rs9555</b> (1 months)
                            </h2>
                            <button className="hotel-book-btn">Reserve or Book now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Hotel;