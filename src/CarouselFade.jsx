import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import { CiBookmark } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";

import "./Assets/css/CarouselFade.css";
import { Link } from "react-router-dom";
import BookmarkButton from "./Assets/features/saveAnime/BookmarkButton";

function CarouselFade({ aniData }) {
  return (
    <Carousel fade className="carousel--box">
      {aniData.map((Item) => (
        <Carousel.Item className="carousel--slides" key={Item.id}>
          <ExampleCarouselImage text={Item.image} />
          <Carousel.Caption>
            <div className="Carousel--content">
              <div className="title">
                <img src={Item.title_image} alt="" />
              </div>
              <div className="info">
                {/* <h3>First slide label</h3> */}
                <p>{Item.synopsis.slice(0, 200) + "..."}</p>
              </div>

              <div className="btns">
                <Link to="/stream" state={{ Anime: Item }}>
                  <button className="ep--btn">
                    <IoPlayOutline size={24} className="inline" />
                    START WATCHING
                  </button>
                </Link>

                <BookmarkButton page={"home--carou"} size={24} Anime={Item} />
                {/* <button className="Save--btn">
                  <CiBookmark size={24} />
                </button> */}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFade;
