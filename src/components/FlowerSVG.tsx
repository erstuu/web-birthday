import { useEffect, useRef } from "react";
import gsap from "gsap";

const FlowerSVG = ({ className, delay = 0 }: { className?: string; delay?: number }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { scale: 0, rotation: -30, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.2, delay, ease: "back.out(1.7)" }
    );
    gsap.to(ref.current, {
      rotation: "+=5",
      yoyo: true,
      repeat: -1,
      duration: 3,
      delay: delay + 1.2,
      ease: "sine.inOut",
    });
  }, [delay]);

  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="50" cy="25" rx="15" ry="22" fill="hsl(340, 55%, 75%)" opacity="0.8" />
      <ellipse cx="75" cy="50" rx="15" ry="22" fill="hsl(345, 50%, 78%)" opacity="0.8" transform="rotate(72 75 50)" />
      <ellipse cx="65" cy="80" rx="15" ry="22" fill="hsl(335, 50%, 72%)" opacity="0.8" transform="rotate(144 65 80)" />
      <ellipse cx="35" cy="80" rx="15" ry="22" fill="hsl(350, 45%, 76%)" opacity="0.8" transform="rotate(216 35 80)" />
      <ellipse cx="25" cy="50" rx="15" ry="22" fill="hsl(338, 55%, 74%)" opacity="0.8" transform="rotate(288 25 50)" />
      <circle cx="50" cy="50" r="12" fill="hsl(38, 70%, 65%)" />
      <circle cx="50" cy="50" r="7" fill="hsl(38, 80%, 75%)" />
    </svg>
  );
};

export default FlowerSVG;
