
const articles = [
  {
    number: "01",
    category: "UNIVERSE",
    title: "How Small Is Earth Compared to the Universe?",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1400&q=90",
    alt: "A distant spiral galaxy surrounded by stars",
    description:
      "Earth feels enormous when we stand on its surface, but in the context of the universe, it is almost unimaginably small. Our planet orbits the Sun, one ordinary star among hundreds of billions in the Milky Way. Our galaxy itself stretches across roughly 100,000 light-years, and it is only one galaxy among the vast number visible across the observable universe.",
    detail:
      "Light travels at approximately 300,000 kilometres per second, yet light from some distant galaxies has taken billions of years to reach us. The observable universe spans about 93 billion light-years in diameter because space has expanded while that light was travelling. Everything we see is only the observable part of a much larger cosmos that may extend far beyond it.",
    color: "bg-violet-100 text-violet-800",
    imageSide: "left",
  },
  {
    number: "02",
    category: "PLANETARY PERSPECTIVE",
    title: "What Would Earth Look Like from Saturn?",
    image:
      "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?auto=format&fit=crop&w=1400&q=90",
    alt: "Saturn and its magnificent rings in space",
    description:
      "Imagine looking back at Earth from the distant neighbourhood of Saturn. Our home planet would appear as a tiny point of light against the darkness of space. Saturn lies hundreds of millions of kilometres from Earth, and the distance between the two planets changes continuously as they travel around the Sun.",
    detail:
      "From that distance, Earth would be far too small to reveal its continents to the naked eye. You would need a telescope to distinguish it from the surrounding stars. Spacecraft have given us extraordinary views of planetary systems, helping us understand just how small and precious our home looks from afar.",
    color: "bg-sky-100 text-sky-800",
    imageSide: "right",
  },
  {
    number: "03",
    category: "EXOPLANETS",
    title: "Can a Planet Have Two Suns?",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=90",
    alt: "A dramatic sunset across a distant landscape",
    description:
      "In science fiction, planets with two suns often have spectacular skies, but these worlds are not imaginary. Astronomers have discovered planets orbiting binary star systems, where two stars travel around a shared centre of mass. Depending on the stars and the planet's orbit, the sky could feature two bright suns rising, setting, or appearing close together.",
    detail:
      "These worlds are called circumbinary planets when they orbit both stars. Their climates depend on factors such as the stars' brightness, the planet's distance, and the stability of its orbit. Whether life could survive there depends on many additional conditions, including temperature, atmosphere, and liquid-water availability.",
    color: "bg-orange-100 text-orange-800",
    imageSide: "left",
  },
  {
    number: "04",
    category: "BLACK HOLES",
    title: "What Is a Black Hole, Really?",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1400&q=90",
    alt: "A luminous cosmic scene filled with stars and glowing gas",
    description:
      "A black hole forms when matter becomes concentrated enough to create a region where gravity is so strong that nothing, not even light, can escape once it passes the event horizon. Some black holes form when massive stars collapse at the end of their lives. Others grow to enormous sizes and reside at the centres of galaxies.",
    detail:
      "Although black holes themselves cannot be seen directly, scientists can study their effects on nearby matter and light. Hot gas swirling around a black hole can glow brightly, while the black hole's gravity can bend light from objects behind it. These observations have helped astronomers test some of the most extreme predictions of Einstein's theory of gravity.",
    color: "bg-rose-100 text-rose-800",
    imageSide: "right",
  },
  {
    number: "05",
    category: "SPACE EXPLORATION",
    title: "How Do Scientists Discover Planets Light-Years Away?",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=90",
    alt: "Earth viewed from space",
    description:
      "Finding planets around distant stars is a remarkable scientific achievement because most exoplanets are too faint to photograph directly. One widely used method is the transit technique, which measures a tiny dip in a star's brightness when a planet passes in front of it. Another method detects the small movements a planet causes in its star through gravitational attraction.",
    detail:
      "Space telescopes and observatories can also study the atmospheres of some exoplanets when starlight passes through them. By analysing the light, scientists search for chemical signatures of gases and learn about a planet's temperature and composition. These techniques help researchers identify worlds that may deserve closer investigation.",
    color: "bg-emerald-100 text-emerald-800",
    imageSide: "left",
  },
  {
    number: "06",
    category: "POSSIBLE LIFE",
    title: "Are There Other Planets That Could Support Life?",
    image:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1400&q=90",
    alt: "A blue planet surrounded by the darkness of space",
    description:
      "Scientists have discovered thousands of planets beyond our solar system, including some that orbit at distances where temperatures could allow liquid water under suitable atmospheric conditions. This region is often called the habitable zone. However, being in this zone does not automatically make a planet habitable, and it certainly does not prove that life exists there.",
    detail:
      "Researchers investigate a world's atmosphere, chemistry, radiation environment, and geological activity to understand whether it might support life. Future telescopes may help detect potential biosignatures, but individual clues must be studied carefully because non-living processes can also produce some of the same signals.",
    color: "bg-blue-100 text-blue-800",
    imageSide: "right",
  },
];

export default function Planet() {
  return (
    <main className="min-h-screen bg-[#f3f6fb] px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-10 sm:mb-14" data-aos="fade-left">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600 sm:text-sm">
            Space &amp; Cosmos
            <span className="px-2 text-slate-300">·</span>
            Science
            <span className="px-2 text-slate-300">·</span>
            The Universe
          </p>

          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-[-0.045em] text-[#102746] sm:text-5xl lg:text-6xl">
            Beyond Our World
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Explore the mysteries of space, from enormous galaxies
            and strange black holes to distant planets and the
            possibility of life beyond Earth.
          </p>
        </header>

        {/* Alternating image and text rows */}
        <section
          data-aos="fade-right"
          aria-label="Space discoveries and science articles"
          className="space-y-7 sm:space-y-9"
        >
          {articles.map((article) => (
            <article
              key={article.number}
              className="grid overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(25,45,75,0.05)] transition-shadow duration-300 hover:shadow-lg md:grid-cols-2"
            >
              {/* Image side alternates */}
              <div
              data-aos="zoom-in"
                className={`relative min-h-64 overflow-hidden sm:min-h-80 md:min-h-full ${
                  article.imageSide === "right"
                    ? "md:order-2"
                    : "md:order-1"
                }`}
              >
                <img
                  src={article.image}
                  alt={article.alt}
                  loading={article.number === "01" ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

                <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-bold text-slate-800 backdrop-blur">
                  ARTICLE {article.number}
                </span>
              </div>

              {/* Text side */}
              <div
                data-aos="fade-left"
                className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${
                  article.imageSide === "right"
                    ? "md:order-1"
                    : "md:order-2"
                }`}
              >
                <span
                  className={`mb-5 w-fit rounded-full px-3 py-1.5 text-[10px] font-extrabold tracking-[0.09em] ${article.color}`}
                >
                  {article.category}
                </span>

                <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#102746] sm:text-3xl">
                  {article.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {article.description}
                </p>

                <div className="my-5 border-t border-slate-100" />

                <p className="text-sm leading-7 text-slate-500 sm:text-[15px] sm:leading-8">
                  {article.detail}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-slate-200 pt-6">
          <p className="text-sm leading-7 text-slate-400">
            The universe is vast, extraordinary, and still full of
            unanswered questions. Every discovery brings us a little
            closer to understanding our place within it.
          </p>
        </footer>
      </div>
    </main>
  );
}
