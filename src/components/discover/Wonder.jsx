
const wonders = [
  {
    number: "01",
    category: "NATURE",
    title: "The Caves That Glow Like Stars",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85",
    alt: "Beautiful blue water in a natural landscape",
    description:
      "In parts of New Zealand, tiny glow-worms illuminate cave ceilings with a magical blue-green shimmer. Their lights resemble a night sky reflected underground, turning quiet limestone chambers into extraordinary natural galleries. These tiny creatures create one of nature’s most fascinating light displays.",
    detail:
      "A living constellation formed by thousands of tiny lights.",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    number: "02",
    category: "PLACES",
    title: "The Place Where Earth Mirrors the Sky",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=85",
    alt: "Vast open landscape beneath a dramatic sky",
    description:
      "During the rainy season, a thin layer of water covers Bolivia’s Salar de Uyuni. The enormous salt flat becomes a natural mirror, reflecting clouds and distant horizons so clearly that the sky and ground seem to merge. Walking across it can feel like floating between two worlds.",
    detail:
      "One of the world's largest natural mirror effects.",
    color: "bg-sky-100 text-sky-800",
  },
  {
    number: "03",
    category: "NATURAL WONDERS",
    title: "Why Is This River Almost Unbelievably Blue?",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
    alt: "Clear turquoise water surrounded by mountains",
    description:
      "Some rivers display astonishing shades of turquoise because clear water interacts with sunlight and pale mineral-rich rocks. Fine suspended particles, water depth, and the riverbed can influence how light is scattered and reflected, creating water that appears almost luminous.",
    detail:
      "Water clarity, sunlight, and minerals all influence its colour.",
    color: "bg-amber-100 text-amber-800",
  },
];

export default function Wonders() {
  return (
    <main className="min-h-screen bg-[#f4f6fa] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <header className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Natural · Wonders
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#10284a] sm:text-4xl lg:text-5xl">
            Earth&apos;s Hidden Wonders
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Explore extraordinary places and natural phenomena
            that make our planet feel almost unreal.
          </p>
        </header>

        {/* Information cards */}
        <section
          aria-label="Extraordinary places around the world"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {wonders.map((place) => (
            <article
              key={place.number}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_30px_rgba(25,45,75,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(25,45,75,0.11)]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={place.image}
                  alt={place.alt}
                  loading={
                    place.number === "01" ? "eager" : "lazy"
                  }
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 backdrop-blur">
                  {place.number} / 03
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1.5 text-[10px] font-extrabold tracking-[0.09em] ${place.color}`}
                  >
                    {place.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold leading-snug tracking-tight text-[#102746] sm:text-2xl">
                  {place.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {place.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-sm leading-7 text-slate-500">
                    {place.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
