import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { blogData, type BlogPost } from "./blogData";

const GAP_PX = 32;

function useCardsPerView() {
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setCardsPerView(3);
      else if (w >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cardsPerView;
}

function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <article className="group rounded-3xl border-hairline bg-card/40 overflow-hidden hover:bg-card/60 transition-all duration-300 ease-in-out flex flex-col shadow-sm h-full">
      <div className="relative h-52 md:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300 z-10" />
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-[var(--gold)] border border-[var(--gold)]/30 uppercase tracking-widest">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-[var(--gold)] transition-colors duration-300 ease-in-out leading-snug">
          {blog.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
          {blog.excerpt}
        </p>
        <button
          type="button"
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:text-[var(--gold-bright)] transition-colors duration-300 ease-in-out group/link w-fit"
        >
          Read More
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300 ease-in-out" />
        </button>
      </div>
    </article>
  );
}

export function BlogSection() {
  const cardsPerView = useCardsPerView();
  const total = blogData.length;
  const extended = [blogData[total - 1], ...blogData, blogData[0]];

  const [slideIndex, setSlideIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const w = container.offsetWidth;
    const gaps = GAP_PX * (cardsPerView - 1);
    setCardWidth((w - gaps) / cardsPerView);
  }, [cardsPerView]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const go = (direction: 1 | -1) => {
    if (!animate) return;
    setAnimate(true);
    setSlideIndex((prev) => prev + direction);
  };

  const handleTransitionEnd = () => {
    if (slideIndex === 0) {
      setAnimate(false);
      setSlideIndex(total);
    } else if (slideIndex === total + 1) {
      setAnimate(false);
      setSlideIndex(1);
    }
  };

  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  const step = cardWidth + GAP_PX;
  const translateX = slideIndex * step;
  const cardBasis =
    cardsPerView > 0
      ? `calc((100% - ${GAP_PX * (cardsPerView - 1)}px) / ${cardsPerView})`
      : "100%";

  const realIndex =
    slideIndex === 0 ? total - 1 : slideIndex > total ? 0 : slideIndex - 1;

  return (
    <section id="blogs" className="py-24 border-y border-hairline bg-card/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
              PropTech Blogs
            </div>
            <h2 className="text-3xl md:text-5xl font-bold max-w-2xl">
              Insights &amp; Engineering
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
              Deep dives on valuation AI, CRM intelligence, tokenized assets, and smart
              infrastructure — built for operators in the PropTech stack.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous blog"
              className="h-11 w-11 rounded-full border-hairline bg-white/5 hover:bg-white/10 grid place-items-center transition-all duration-300 ease-in-out"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next blog"
              className="h-11 w-11 rounded-full border-hairline bg-white/5 hover:bg-white/10 grid place-items-center transition-all duration-300 ease-in-out"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={containerRef} className="overflow-hidden">
          <div
            className={`flex gap-8 ${animate ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${translateX}px)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((blog, idx) => (
              <div
                key={`${blog.id}-${idx}`}
                className="shrink-0"
                style={{ flexBasis: cardBasis, minWidth: cardBasis }}
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {blogData.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to blog ${i + 1}`}
              onClick={() => {
                setAnimate(true);
                setSlideIndex(i + 1);
              }}
              className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
                i === realIndex
                  ? "w-8 bg-[var(--gold)]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
