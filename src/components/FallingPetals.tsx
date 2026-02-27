import { useEffect, useRef } from "react";
import gsap from "gsap";

const FallingPetals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const petals: HTMLDivElement[] = [];

    const createPetal = () => {
      const petal = document.createElement("div");
      petal.className = "petal";
      const size = Math.random() * 14 + 8;
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.top = `-20px`;
      petal.style.opacity = `${Math.random() * 0.5 + 0.3}`;

      const hue = 340 + Math.random() * 30 - 15;
      const sat = 50 + Math.random() * 20;
      const light = 70 + Math.random() * 15;
      petal.style.background = `hsl(${hue}, ${sat}%, ${light}%)`;
      petal.style.borderRadius = Math.random() > 0.5 ? "50% 0 50% 0" : "0 50% 0 50%";

      container.appendChild(petal);
      petals.push(petal);

      gsap.to(petal, {
        y: window.innerHeight + 40,
        x: `+=${Math.random() * 200 - 100}`,
        rotation: Math.random() * 720 - 360,
        duration: Math.random() * 5 + 5,
        ease: "none",
        onComplete: () => {
          petal.remove();
          petals.splice(petals.indexOf(petal), 1);
        },
      });
    };

    const interval = setInterval(createPetal, 400);

    return () => {
      clearInterval(interval);
      petals.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
    />
  );
};

export default FallingPetals;
