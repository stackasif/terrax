import { ChevronRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    number: "01",
    category: "NATURE",
    title: "Can the Ocean Glow in the Dark?",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=90",
    alt: "Ocean waves beneath a dark night sky",
    description:
      "Have you ever imagined a beach glowing with electric blue light after sunset? This incredible phenomenon is known as bioluminescence. It happens when tiny marine organisms, including certain types of plankton, produce light through a natural chemical reaction. When waves move or someone walks through the water, these organisms can create brilliant blue flashes along the shoreline, making the ocean appear like a galaxy of stars.",
    detail:
      "Bioluminescence is used by marine organisms for defence, communication, and attracting prey. The glow is most visible on dark nights when the water is disturbed and there is little competing light from the surroundings.",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    number: "02",
    category: "EARTH HISTORY",
    title: "When the Sahara Was Green",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=90",
    alt: "Vast golden desert dunes under warm sunlight",
    description:
      "Today, the Sahara is famous for its enormous sand dunes and extreme dryness, but thousands of years ago, much of this region looked remarkably different. During a period known as the African Humid Period, regular monsoon rains transformed parts of the Sahara into grasslands, lakes, wetlands, and habitats filled with wildlife. Ancient rock paintings and archaeological discoveries reveal that people once lived in areas that are now among the driest places on Earth.",
    detail:
      "Changes in Earth's orbit altered the amount of sunlight reaching the Northern Hemisphere, influencing monsoon patterns. The Sahara gradually became drier, although scientists continue to study how climate, vegetation, and human activity shaped this transformation.",
    color: "bg-amber-100 text-amber-800",
  },
  {
    number: "03",
    category: "SCIENCE",
    title: "The Hidden Network Beneath Our Feet",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=90",
    alt: "Sunlight filtering through a dense green forest",
    description:
      "Beneath the forest floor lies a complex world of roots, fungi, and microscopic life. Many fungi form partnerships with plant roots through networks called mycorrhizae. The fungi help plants absorb water and nutrients, especially phosphorus, while receiving sugars produced through photosynthesis in return. These underground connections link roots with fungal threads and play an important role in keeping forest ecosystems healthy.",
    detail:
      "Scientists are investigating how these fungal networks influence nutrient movement and communication between plants. The relationships are complex, however, and their effects vary by species and environment. The soil beneath a forest is far more alive and interconnected than it appears.",
    color: "bg-violet-100 text-violet-800",
  },
];

export default function Things() {
  return (
    <main className="min-h-screen bg-[#f3f6fb] px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        {/* Page Header */}
        <header className="mb-8 sm:mb-10">
          <div className="flex justify-between items-center ">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600 sm:text-sm" data-aos="fade-right">
                Curious Facts
                <span className="px-2 text-slate-300">·</span>
                Real Stories
                <span className="px-2 text-slate-300">·</span>
                A Deeper World
              </p>

              <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.045em] text-[#102746] sm:text-5xl lg:text-6xl" data-aos="fade-right">
                Things You Never Knew
              </h1>
            </div>
             <Link
              data-aos="fade-left"
                href={"/discover"}
                className="bg-blue-100 mr-4 hover:bg-cyan-200 text-gray-800 rounded-full font-semibold inline-flex items-center gap-1 cursor-pointer p-3 border border-gray-300 text-[13px] shrink-0 self-center"
              >
                        Discover more
                    <ChevronRight className="w-[15px] h-[15px]" />
            </Link>
          </div>

          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8" data-aos="fade-up">
            Surprising facts, incredible stories, and hidden science
            about our planet. Explore the mysteries of nature, the
            secrets of Earth's past, and the discoveries that reveal
            how our world really works.
          </p>
        </header>

        {/* Article Cards */}
        <section
          aria-label="Curious facts and scientific discoveries"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {articles.map((article) => (
            <article
              data-aos="zoom-in"
              key={article.number}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_30px_rgba(25,45,75,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(25,45,75,0.11)]"
            >
              {/* Article Image */}
              <div className="relative h-64 overflow-hidden sm:h-72" data-aos="zoom-in">
                <img
                  src={article.image}
                  alt={article.alt}
                  loading={
                    article.number === "01" ? "eager" : "lazy"
                  }
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Article Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6" data-aos="fade-right">
                <span
                  className={`mb-4 w-fit rounded-full px-3 py-1.5 text-[10px] font-extrabold tracking-[0.09em] ${article.color}`}
                >
                  {article.category}
                </span>

                <h2 className="text-xl font-bold leading-snug tracking-tight text-[#102746] sm:text-2xl">
                  {article.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-7">
                  {article.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-sm leading-7 text-slate-500">
                    {article.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-200 pt-5" data-aos="zoom-in">
          <p className="text-xs leading-6 text-slate-400">
            Discover the fascinating science, hidden histories, and
            extraordinary natural processes that shape our world.
          </p>
        </footer>
      </div>
    </main>
  );
}
