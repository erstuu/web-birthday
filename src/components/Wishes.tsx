export default function Wishes({ wishesRef, wishes }) {
  return (
    <section className="py-16 md:py-24 px-4 bg-cream/50">
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-center text-foreground mb-16">
        Doa & Harapan
      </h2>
      <div
        ref={wishesRef}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {wishes.map((wish, i) => (
          <div
            key={i}
            className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
          >
            <span className="text-4xl block mb-4">{wish.emoji}</span>
            <p className="font-body text-muted-foreground">{wish.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
