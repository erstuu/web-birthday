import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mountainFlowers from "@/assets/mountain-flowers.jpg";
import FallingPetals from "@/components/FallingPetals";
import FlowerSVG from "@/components/FlowerSVG";
import wishes from "./Data";
import Foorter from "./components/Footer";
import Wishes from "./components/Wishes";
import Message from "./components/Message";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const wishesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero image parallax
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Title animation
      if (titleRef.current) {
        const chars = titleRef.current.innerText.split("");
        titleRef.current.innerHTML = chars
          .map((c) =>
            c === " " ? " " : `<span class="inline-block">${c}</span>`,
          )
          .join("");

        gsap.from(titleRef.current.querySelectorAll("span"), {
          y: 100,
          opacity: 0,
          rotationX: -90,
          stagger: 0.05,
          duration: 1,
          delay: 0.5,
          ease: "back.out(1.7)",
        });
      }

      // Subtitle
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 1.2,
          delay: 1.8,
          ease: "power3.out",
        });
      }

      // Message section
      if (messageRef.current) {
        gsap.from(messageRef.current.children, {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: messageRef.current,
            start: "top 80%",
          },
        });
      }

      // Wishes section
      if (wishesRef.current) {
        gsap.from(wishesRef.current.children, {
          scale: 0.8,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: wishesRef.current,
            start: "top 80%",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <FallingPetals />

      <Hero
        heroRef={heroRef}
        imageRef={imageRef}
        img={mountainFlowers}
        titleRef={titleRef}
        subtitleRef={subtitleRef}
      />

      <Message FlowerSVG={FlowerSVG} messageRef={messageRef} />
      <Wishes wishesRef={wishesRef} wishes={wishes} />
      <Foorter />
    </div>
  );
};

export default App;
