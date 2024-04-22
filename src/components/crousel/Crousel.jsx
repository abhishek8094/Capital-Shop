import React, { useEffect, useState } from "react";

const Carousel = ({ movingimg, interval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === movingimg.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? movingimg.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    const autoPlayTimer = setTimeout(() =>{
      nextSlide();
    }, interval)

    return () => {
      clearInterval(autoPlayInterval);
      clearTimeout(autoPlayTimer);
    };
  }, [interval]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <img
        src={movingimg[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="w-full h-[380px] object-bottom"
      />
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {movingimg.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

    </div>
  );
};

export default Carousel;
