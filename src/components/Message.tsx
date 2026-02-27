import { useRef, useEffect } from "react";
import { images } from "@/Data";
import gsap from "gsap";

export default function Message({ messageRef, FlowerSVG }) {
  const leftImgRef = useRef(null);
  const rightImg1Ref = useRef(null);
  const rightImg2Ref = useRef(null);

  useEffect(() => {
    [leftImgRef, rightImg1Ref, rightImg2Ref].forEach((ref, i) => {
      gsap.to(ref.current, {
        y: -20,
        duration: 2 + i * 0.3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4">
      {/* Taruh sekali di dalam return, sebelum section */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.25 C0.5,0.25 0.9,0.05 0.9,0.35 C0.9,0.65 0.5,0.9 0.5,0.9 C0.5,0.9 0.1,0.65 0.1,0.35 C0.1,0.05 0.5,0.25 0.5,0.25Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Gambar kiri */}
      <div
        ref={leftImgRef}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-24 md:w-56"
      >
        <img
          src={images.img1}
          className="w-full h-full object-cover"
          style={{ aspectRatio: "1", clipPath: "url(#heart-clip)" }}
        />
      </div>

      {/* Gambar kanan atas */}
      <div
        ref={rightImg1Ref}
        className="absolute right-4 md:right-8 top-1/4 w-24 md:w-56"
      >
        <img
          src={images.img6}
          className="w-full h-full object-cover"
          style={{ aspectRatio: "1", clipPath: "url(#heart-clip)" }}
        />
      </div>

      {/* Gambar kanan bawah */}
      <div
        ref={rightImg2Ref}
        className="absolute right-8 md:right-16 top-2/3 w-24 md:w-56"
      >
        <img
          src={images.img2}
          className="w-full h-full object-cover"
          style={{ aspectRatio: "1", clipPath: "url(#heart-clip)" }}
        />
      </div>

      <div ref={messageRef} className="max-w-2xl mx-auto text-center space-y-8">
        <FlowerSVG className="w-16 h-16 mx-auto" delay={0} />
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
          Pesan buat kamu
        </h2>
        <div className="w-20 h-0.5 bg-bloom mx-auto rounded-full" />
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
          Hari ini hari orang paling spesial buat aku. Semoga semua hal baik
          pelan-pelan datang ke kamu. Semoga setiap langkah kamu dipenuhi
          keberanian, kesehatan, dan kebahagiaan.
        </p>
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
          Dan semoga… kamu nggak pernah capek punya aku di samping kamu ya 🥺🫶
          Karena aku mau nemenin kamu lama banget.
        </p>
      </div>
    </section>
  );
}
