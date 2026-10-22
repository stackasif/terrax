
const places = [
  {
    number: "01",
    category: "UNIQUE LANDSCAPES",
    title: "The Mountains That Look Like Another Planet",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=90",
    alt: "Dramatic mountain peaks surrounded by clouds",
    description:
      "Zhangjiajie, China, is famous for its towering sandstone pillars that rise dramatically through forests and drifting clouds. Over millions of years, wind, rain, and erosion sculpted these narrow formations into a landscape that seems almost impossible. When mist settles between the peaks, the mountains appear to float above the valleys, creating an otherTERRAX scene that has inspired artists, photographers, and travellers from around the world.",
    detail:
      "The region's dramatic pillars, deep ravines, and changing fog make every viewpoint feel different. Early morning is especially atmospheric, when clouds move between the cliffs and reveal the extraordinary scale of this terrain.",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    number: "02",
    category: "NATURAL WONDERS",
    title: "The Landscape That Looks Alien",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=90",
    alt: "An expansive and surreal natural landscape",
    description:
      "Ethiopia's Danakil Depression is one of the most extreme environments on Earth. Volcanic activity, mineral-rich springs, and intense heat create vivid pools and crusts of yellow, orange, green, and white. These striking colours come from salts, sulphur compounds, and other minerals, forming patterns that look more like an imagined alien world than a familiar landscape. The region is also among the hottest and lowest places on the planet.",
    detail:
      "Its extraordinary colours are a reminder that landscapes are always changing. The same geological forces that create its beauty can also make the area hazardous, so visits require careful planning and local guidance.",
    color: "bg-amber-100 text-amber-800",
  },
  {
    number: "03",
    category: "RARE PLACES",
    title: "The Island with Trees from Another World",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=90",
    alt: "A rugged landscape with mountains and unusual scenery",
    description:
      "Socotra, an island in the Arabian Sea belonging to Yemen, is known for its unusual dragon's blood trees, whose broad, umbrella-like crowns rise above thick, sculptural trunks. These remarkable trees produce a deep red resin and have adapted to the island's dry, rugged conditions. Socotra's long isolation has also allowed many distinctive plant species to evolve, giving the island a remarkable character found nowhere else quite like it.",
    detail:
      "The island's unusual flora, limestone plateaus, caves, and clear coastal waters support a delicate ecosystem. Protecting these habitats is important because many of Socotra's plants and animals are rare and highly specialised.",
    color: "bg-sky-100 text-sky-800",
  },
];

export default function Places() {
  return (
    <main className="min-h-screen bg-[#f3f6fb] px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <header className="mb-8 sm:mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600 sm:text-sm">
            Extraordinary Places
            <span className="px-2 text-slate-300">·</span>
            Unique Landscapes
            <span className="px-2 text-slate-300">·</span>
            Real Wonders
          </p>

          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-[-0.045em] text-[#102746] sm:text-5xl lg:text-6xl">
            Places That Don&apos;t Feel Real
          </h1>

          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Breathtaking places, surreal landscapes, and natural
            wonders that look like another planet. Discover the
            geological forces, unusual ecosystems, and remarkable
            stories that make these destinations unlike anywhere
            else on Earth.
          </p>
        </header>

        {/* Cards */}
        <section
          aria-label="Extraordinary places around the world"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {places.map((place) => (
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

        {/* Footer text only */}
        <footer className="mt-10 border-t border-slate-200 pt-5">
          <p className="text-xs leading-6 text-slate-400">
            A collection of extraordinary landscapes shaped by
            time, geology, and the remarkable diversity of our planet.
          </p>
        </footer>
      </div>
    </main>
  );
}
