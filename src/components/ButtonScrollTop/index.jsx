import React, { Fragment, useEffect, useState } from "react";
import { IconArrowUp } from "../../assets/images";

const ButtonScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleSetIsVisible = () => {
      if (window.pageYOffset > 600) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", handleSetIsVisible);

    return () => {
      window.removeEventListener("scroll", handleSetIsVisible);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      {isVisible && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-5 right-5 transform hover:-translate-y-1 transition-all duration-300"
        >
          <img className="w-7 h-7" src={IconArrowUp} alt="IconArrowUp" />
        </button>
      )}
    </Fragment>
  );
};

export default ButtonScrollTop;
