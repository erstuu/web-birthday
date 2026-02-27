export default function Message({ messageRef, FlowerSVG }) {
  return (
    <section className="py-20 md:py-32 px-4">
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
