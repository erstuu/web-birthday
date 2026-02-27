export default function Hero({
  heroRef,
  imageRef,
  img,
  titleRef,
  subtitleRef,
}) {
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
          className="font-display text-5xl md:text-7xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
        >
          Happy Birthday, My Beloved One!
        </h1>
        <p
          ref={subtitleRef}
          className="font-body text-xl md:text-2xl text-gray-500 max-w-lg mx-auto italic"
        >
          Hari ini adalah hari istimewamu, semoga penuh kebahagiaan dan cinta
        </p>
      </div>
    </section>
  );
}
