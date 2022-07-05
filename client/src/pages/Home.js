import React from "react";
import Header from "../components/Header";
import Images from "../images";
import NewsLetter from "../components/NewsLetter";
import Carousel from "../components/Carousel";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Home = () => {
  const carouselImages = [Images.amal_image, Images.amal_image_2];
  return (
    <div className="home">
      <Parallax
        strength={-200}
        blur={{ min: -15, max: 15 }}
        bgImage={Images.baghdad_19}
        className="home-hero-background"
      >
        <div className="heading container-lg">
          <div className="heading-content text-center">
            <h1 className="display-1 text-gradient-headline">
              Art Bridge To Baghdad
            </h1>

            <h3 className="display-6 text-dark mb-0">
              Mespotamian Art Gallery
            </h3>
            <h4 className="lead text-dark mb-0 ">
              The Elegance of simpler times
            </h4>
            <div className="text-center">
              <h6
                className="h5 text-dark mt-5 bg-light py-1"
                id="galleryfounder"
              >
                by Traditional Iraqi Artist, Amal Maseer
              </h6>
              <p className="lead py-3">
                <Link className="btn-slide my-5" to="/about" role="button">
                  Our Story
                </Link>
              </p>{" "}
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax
        blur={{ min: -10, max: 10 }}
        strength={-200}
        bgImage={Images.painting_knights}
      >
        <div style={{ height: "1597px", margin: "0 auto" }}>
          <div className="container-lg">
            <h3
              style={{ position: "relative", top: "377px" }}
              className="display-1 text-light mt-5 row text-shadow"
            >
              Arabian Nights
            </h3>

            <div
              className="col-md-12 row my-5 parag"
              style={{ position: "relative", top: "610px" }}
            >
              <img className="col-md-4" src={Images.amal_image} />
              <div className="col-md-8 mt-5 px-5">
                <p className="text-light h2 text-shadow">
                  Welcome to my online shop!
                  <br />
                  <br />
                  I'm Amal Maseer, owner of the Art Bridge to Baghdad gallery.
                  Thanks for your visit, Enjoy your time and happy scrolling!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <Parallax
        blur={{ min: -10, max: 15 }}
        bgImage={Images.baghdad_13}
        strength={-100}
      >
        <div className="home-page my-0">
          <div className="container-lg my-0">
            <section className="main-article row justify-content-center justify-items-center my-0">
              <div className="col-md-12 text-center">
                <h3 className="display-3 text-center mt-5">
                  <br />
                  At Last, I launch the official store for my handmade
                  Mespotomian Paintings!
                </h3>
              </div>

              <div className="col-md-12 row my-5 parag">
                <img
                  className="col-md-4"
                  id="cradle_img"
                  src={Images.baghdad_16}
                />
                <div className="col-md-12 mt-5 px-5">
                  <h5> The Cradle of Civilization </h5>
                  <p>
                    Everywhere in the world, kids are taught about Mesopotamia.
                    A land which hosted some of the world's earliest
                    civilizations like Babylon, Summeria and Assyria. Because of
                    it's strategic and central location, Iraq has always been a
                    place where people from different cultures met and melted
                    together and not just because of the temperature. Nope. It
                    might come as a surprise, but Iraq has a lot more sceneric
                    landscapes than deserts. There is the UNESCO Heritage Site
                    of the Mesopotamian marshes in the southern city of Basra.
                    In the North there is the cool and mountaneous region of
                    Iraqi Kurdistan. And There are the Tigris and Euphrates
                    rivers than run across the map. Besides the amazing and
                    exotic landscapes, Iraq is home to a multitude of ethnicies
                    and religious groups.
                  </p>
                </div>
              </div>

              <div className="col-md-12 row my-5 parag">
                <div className="col-md-8 mt-5 px-5">
                  <p>
                    <br />
                    Tourists have been flocking to Iraq in recent years, walking
                    in the streets of Baghdad feeling safe and welcomed by
                    Iraqis! It's a land of great cultural and ethnic diversity,
                    long history, and strategic location. From Babylon to
                    Summeria to the Ottoman Empire, Mesopotamia is, undoubtedly,
                    one of the world's richest countries in culture!
                  </p>
                </div>
                <img className="col-md-4" src={Images.painting_2} />
              </div>

              <div className="col-md-12 row my-5 parag">
                <img className="col-md-4" src={Images.painting_4} />
                <div className="col-md-8 mt-5 px-5">
                  <p>
                    I learned to paint under the mentorship of Hafidh Al
                    Doroubi, who was mentored by Silvador. International and
                    local Iraqi press repeatedly featured my paintings since the
                    80s and to this day.Former President of Iraq, Saddam Hussein
                    had seen and liked a portrait I made of him so much he
                    personally met with me and decided to hang the portrait up
                    in one of Baghdad's squares.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Parallax>

      <section className="row justify-content-center justify-items-center">
        <NewsLetter />
      </section>
    </div>
  );
};

export default Home;
