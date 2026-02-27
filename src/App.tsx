import { useEffect, useRef, useState } from "react";
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
import music from "/musik.mp3";
import FloatingMusicButton from "./components/FloatingMusicButton";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const wishesRef = useRef<HTMLDivElement>(null);
  const wishesHeadingRef = useRef<HTMLHeadingElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // autoplay saat pertama load
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // browser block autoplay, user harus interact dulu
          setIsPlaying(false);
        });
    }
  }, []);

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
      if (wishesHeadingRef.current) {
        gsap.from(wishesHeadingRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wishesHeadingRef.current,
            start: "top 80%",
          },
        });
      }

      if (wishesRef.current) {
        gsap.from(wishesRef.current.children, {
          scale: 0.8,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: wishesHeadingRef.current,
            start: "top 80%",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/*<audio ref={audioRef} src={music} loop />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-pink-400 hover:bg-pink-500 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        {isPlaying ? <Pause size={20} /> : <Music size={20} />}
      </button>*/}

      <FloatingMusicButton
        audioRef={audioRef}
        music={music}
        isPlaying={isPlaying}
        toggleMusic={toggleMusic}
      />
      <FallingPetals />

      <Hero
        heroRef={heroRef}
        imageRef={imageRef}
        img={mountainFlowers}
        titleRef={titleRef}
        subtitleRef={subtitleRef}
      />

      <Message FlowerSVG={FlowerSVG} messageRef={messageRef} />
      <Wishes
        wishesRef={wishesRef}
        wishesHeadingRef={wishesHeadingRef}
        wishes={wishes}
      />
      <Foorter />
    </div>
  );
};

export default App;
