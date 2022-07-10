import React, { useState } from "react";
import PropTypes from "prop-types";

const Slider = ({ elements }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const handleNextSlide = () => {
        if (activeSlide < elements.length - 1) {
            setActiveSlide((prevState) => prevState + 1);
        } else setActiveSlide(0);
    };
    const handlePrevSlide = () => {
        if (activeSlide > 0) {
            setActiveSlide((prevState) => prevState - 1);
        } else setActiveSlide(elements.length - 1);
    };
    return (
        elements && (
            <div className="carousel slide pb-4" data-ride="carousel">
                <div className="carousel-inner">
                    {elements.map((element, index) => (
                        <div
                            className={
                                "carousel-item" +
                                (index === activeSlide ? " active" : "")
                            }
                            key={index + "slide"}
                        >
                            {" "}
                            <h4 className="mt-2 text-muted text-center">
                                {element.title}
                            </h4>
                            <h5 className="mt-2 text-muted text-center">
                                {element.description}
                            </h5>
                            <img
                                className="d-block w-100"
                                src={element.image}
                                alt={element.title}
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    onClick={handlePrevSlide}
                >
                    <span
                        className="carousel-control-prev-icon bg-secondary"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only"></span>
                </button>
                <button
                    className="carousel-control-next"
                    onClick={handleNextSlide}
                >
                    <span
                        className="carousel-control-next-icon bg-secondary"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only"></span>
                </button>
            </div>
        )
    );
};

Slider.propTypes = {
    elements: PropTypes.array
};

export default Slider;
