import React, { useEffect, useRef } from "react";
import { TimelineLite, Power3 } from "gsap";
import "@google/model-viewer";
import model from "../assets/frapo.glb";
import "../styles/App.css";
const Banner = () => {
 // let foto = useRef(null);
  let titulo1 = useRef(null);
  let titulo2 = useRef(null);
  let cardOne = useRef(null);
  let cardTwo = useRef(null);

  let t1 = new TimelineLite({ delay: 0.8 }); //para asegurar la carga de la animacion

  useEffect(() => {
    /* TweenMax.to(foto, 10, { css: { visibility: 'visible' } });
    t1.from(foto, 1.2, { x: 800, ease: Power3.easeOut }, 'Start').from(
      foto,
      2,
      { scale: 0.8, ease: Power3.easeOut },
      0.2
    );*/

    t1.from(titulo1, 1.2, { x: -800, ease: Power3.easeOut }, "Start").from(
      titulo1,
      2,
      { scale: 0.8, ease: Power3.easeOut },
      0.2
    );

    t1.from(titulo2, 0.8, { y: 800, ease: Power3.easeInOut }, "Start").from(
      titulo2,
      0.6,
      { scale: 0.1, ease: Power3.easeOut },
      0.8
    );

    t1.from(cardTwo, 3, { x: -800, ease: Power3.easeInOut }, "Start").from(
      cardTwo,
      3,
      { scale: 0.1, ease: Power3.easeOut },
      0.15
    );

    t1.from(cardOne, 4, { x: -1000, ease: Power3.easeInOut }, "Start").from(
      cardOne,
      4,
      { scale: 0.1, ease: Power3.easeOut },
      0.2
    );
  },[]);

  return (
    <div className="">
      <div className="flex  flex-col lg:flex-row justify-between ">
        <div className="sm:w-full sm:mt-16 md:w-1/2 md:p-12 md:ml-16">
          <div className="sm:mt-8 ">
            <h2
              ref={(el) => {
                titulo1 = el;
              }}
              className="font-bold text-4xl mt-16 sm: p-8 md:p-0"
            >
              Hi! I'm Fran 
              <br className="" />I develop systems that
              <span className="">
                <div className="" />
                <span
                  className={``}
                >
                  generate incredible experiences.
                </span>
              </span>
            </h2>
            <p
              ref={(el) => {
                titulo2 = el;
              }}
              className="font-normal text-2xl  md:mt-8 sm: p-8 md:p-0 "
            >
              Nice to meet you! I know that my portfolio is not perfect but
              these were developed with a lot of effort,
            </p>
          </div>
          <div className="mt-8 flex flex-col-reverse md:flex-row  sm: p-8 md:p-0">
            <div
              ref={(el) => {
                cardOne = el;
              }}
              className=" shadow-lg mt-4 mr-0 md:mr-4 md:mt-0"
            >
              <div className="h-full  p-5 border-l-2 borderCard rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  A business big that 1
                </h6>
                <p className="text-sm text-gray-900">
                  Those options are already baked in with.
                </p>
              </div>
            </div>
            <div
              ref={(el) => {
                cardTwo = el;
              }}
              className="shadow-lg"
            >
              <div className="h-full  p-5 border-l-2 borderCard rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  A business big that 2
                </h6>
                <p className="text-sm text-gray-900">
                  Those options are already baked in with.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="model ">
          <model-viewer
            poster="https://res.cloudinary.com/frapoteam/image/upload/v1620880668/avatarss_b1m8ml.png"
            src={model}
            alt="model name"
            loading="lazy"
            auto-rotate
            disable-zoom
            camera-controls
            shadow-intensity="2"
            autoplay
          ></model-viewer>
        </div>
      </div> 
    </div>
  );
};

export default Banner;
