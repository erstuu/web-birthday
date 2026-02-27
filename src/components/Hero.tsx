import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { topImages, bottomImages } from "@/Data";

export default function Hero({
  heroRef,
  imageRef,
  img,
  titleRef,
  subtitleRef,
}) {
  const photosRef = useRef([]);

  useEffect(() => {
    if (photosRef.current.length === 0) return;

    gsap.from(photosRef.current, {
      y: 200,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      delay: 2,
    });
  }, []);

  const addToRefs = (el: HTMLElement) => {
    if (el && !photosRef.current.includes(el)) {
      photosRef.current.push(el);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        ref={imageRef}
        src={img}
        alt="Ballon"
        className="absolute inset-0 w-full h-full object-cover scale-100"
      />
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
      <div className="relative z-10 text-center px-4">
        <h1
          ref={titleRef}
          className="font-display text-2xl md:text-7xl lg:text-6xl font-bold text-pink-500 mb-6 leading-tight"
        >
          Happy Birthday, Bee!
        </h1>
        <p
          ref={subtitleRef}
          className="font-body text-xl md:text-2xl sm:text-xl text-pink-400 max-w-3xl mx-auto italic"
        >
          Di hari istimewamu ini, semoga semesta menghadiahkanmu kebahagiaan
          tanpa batas dan cinta yang tak pernah habis.
        </p>
      </div>

      <div className="absolute top-0 flex flex-row gap-2 -translate-y-1/4 z-20 md:hidden">
        {topImages.map((item, i) => (
          <div
            key={i}
            ref={addToRefs}
            className={`w-40 m-4 p-4 rounded-md bg-white ${item.rotate}`}
          >
            <img src={item.src} className="w-full" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 flex flex-row gap-2 translate-y-1/4 z-20">
        {bottomImages.map((item, i) => (
          <div
            key={i}
            ref={addToRefs}
            className={`rounded-md bg-white ${item.className} ${item.rotate}`}
          >
            <img src={item.src} className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
