"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const images = {
  electrician: "/images/gallery2.webp",
  panel: "/images/gallery3.webp",
  pendants: "/images/gallery4.webp",
  kitchen: "/images/gallery5.webp",
  lights: "/images/gallery6.webp",
  dock: "/images/gallery8.webp",
  duck: "/images/gsllery7.webp",
};

const galleryItems = [
  {
    src: images.pendants,
    label: "Lighting",
    className: "gallery-featured",
  },
  {
    src: images.kitchen,
    label: "Remodeling",
    className: "",
  },
  {
    src: images.panel,
    label: "Electrical Installation",
    className: "",
  },
  {
    src: images.dock,
    label: "Outdoor Projects",
    className: "gallery-wide",
  },
  {
    src: images.duck,
    label: "Outdoor Projects",
    className: "gallery-wide",
  },
  {
    src: images.lights,
    label: "Lighting",
    className: "",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div
      className="
        mb-[53px]
        max-w-[720px]
        max-[900px]:mb-[34px]
        max-[640px]:mb-[30px]
      "
    >
      <span
        className="
          mb-[18px]
          inline-flex
          items-center
          gap-[9px]
          font-[family-name:var(--font-body)]
          text-[11px]
          font-extrabold
          uppercase
          tracking-[0.2em]
          text-[#3eaf17]
          before:h-[2px]
          before:w-[27px]
          before:bg-[#43c91a]
          before:content-['']
          max-[640px]:mb-[15px]
        "
      >
        {eyebrow}
      </span>

      <h2
        className="
          font-[family-name:var(--font-heading)]
          text-[clamp(43px,4.3vw,62px)]
          font-bold
          leading-[0.98]
          tracking-[-0.025em]
          text-[#10140f]
          max-[900px]:text-[clamp(42px,7vw,56px)]
          max-[640px]:text-[42px]
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-[21px]
            max-w-[660px]
            font-[family-name:var(--font-body)]
            text-[16px]
            leading-[1.7]
            text-[#667064]
            max-[640px]:mt-[17px]
            max-[640px]:text-[14px]
            max-[640px]:leading-[1.65]
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}

function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="
        group
        inline-flex
        min-h-[52px]
        items-center
        justify-center
        gap-[10px]
        rounded-[7px]
        border
        border-[#dfe5dc]
        bg-white
        px-[24px]
        font-[family-name:var(--font-body)]
        text-[14px]
        font-bold
        text-[#10140f]
        transition-all
        duration-[180ms]
        hover:-translate-y-[2px]
        hover:border-[#10140f]
        focus-visible:outline
        focus-visible:outline-[3px]
        focus-visible:outline-[#68e236]/40
        focus-visible:outline-offset-[3px]
        max-[640px]:w-full
      "
    >
      {children}
    </a>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Gallery() {
  return (
    <section
      id="work"
      className="
        bg-white
        py-[112px]
        max-[900px]:py-[88px]
        max-[640px]:py-[72px]
      "
    >
      <div
        className="
          mx-auto
          w-[min(1180px,calc(100%-48px))]
          max-[640px]:w-[calc(100%-32px)]
        "
      >
        {/* Intro */}
        <Reveal>
          <div
            className="
              flex
              items-end
              justify-between
              gap-[40px]
              max-[900px]:items-start
              max-[900px]:flex-col
              max-[640px]:gap-0
            "
          >
            <SectionHeading
              eyebrow="Our Work"
              title="Quality Electrical Work in Real Homes & Properties"
              description="A look at the lighting, electrical and installation work Greenbolt Electric is equipped to complete."
            />

            <div
              className="
    shrink-0
    pb-[53px]
    max-[900px]:pb-0
    max-[640px]:mt-[4px]
    max-[640px]:w-full
  "
            >
              <ButtonLink href="#contact">
                Start a Project
                <ArrowRight
                  size={18}
                  className="
        transition-transform
        duration-200
        group-hover:translate-x-[4px]
      "
                />
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        {/* Desktop / Tablet Gallery */}
        <div
          className="
    grid
    min-h-[740px]
    grid-cols-[1.25fr_0.75fr_0.75fr]
    grid-rows-[1fr_0.9fr]
    gap-[13px]

    max-[900px]:min-h-[620px]
    max-[900px]:grid-cols-[1.15fr_0.85fr]
    max-[900px]:grid-rows-[1fr_1fr]

    max-[640px]:mt-[28px]
    max-[640px]:flex
    max-[640px]:min-h-0
    max-[640px]:w-[calc(100vw-16px)]
    max-[640px]:max-w-none
    max-[640px]:-mr-[16px]
    max-[640px]:gap-[12px]
    max-[640px]:overflow-x-auto
    max-[640px]:overflow-y-hidden
    max-[640px]:snap-x
    max-[640px]:snap-mandatory
    max-[640px]:overscroll-x-contain
    max-[640px]:pb-[8px]
    max-[640px]:pr-[16px]
    [scrollbar-width:none]
    [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:hidden
  "
        >
          {galleryItems.map((item, index) => {
            const isFeatured = item.className === "gallery-featured";
            const isWide = item.className === "gallery-wide";

            return (
              <Reveal
                key={`${item.label}-${index}`}
                delay={(index % 3) * 0.07}
                className={`
                  group
                  relative
                  min-h-[300px]
                  overflow-hidden
                  rounded-[4px]
                  bg-[#dfe5dc]

                  ${isFeatured ? "row-span-2" : ""}
                  ${isWide ? "col-span-2" : ""}

                  max-[900px]:min-h-[290px]

                  max-[640px]:h-[430px]
                  max-[640px]:min-h-0
                  max-[640px]:w-[78vw]
                  max-[640px]:min-w-[78vw]
                  max-[640px]:shrink-0
                  max-[640px]:snap-start
                  max-[640px]:rounded-[6px]
                `}
              >
                <img
                  src={item.src}
                  alt={`${item.label} electrical project`}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[700ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.045]
                  "
                />

                {/* Dark gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/20
                    to-transparent
                  "
                />

                {/* Content */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-[25px]
                    max-[640px]:p-[20px]
                  "
                >
                  <span
                    className="
                      mb-[7px]
                      block
                      font-[family-name:var(--font-body)]
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.14em]
                      text-[#68e236]
                      max-[640px]:text-[9px]
                    "
                  >
                    {item.label}
                  </span>

                  <strong
                    className="
                      inline-flex
                      items-center
                      gap-[7px]
                      font-[family-name:var(--font-heading)]
                      text-[21px]
                      font-semibold
                      leading-[1.1]
                      text-white
                      max-[640px]:text-[20px]
                    "
                  >
                    View Project
                    <ArrowRight
                      size={16}
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-[4px]
                      "
                    />
                  </strong>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Mobile swipe hint */}
        <div
          className="
            mt-[10px]
            hidden
            items-center
            justify-center
            gap-[7px]
            font-[family-name:var(--font-body)]
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-[#8a9386]
            max-[640px]:flex
          "
        >
          <span>Swipe to explore</span>
          <ArrowRight size={13} />
        </div>

        {/* Note */}
        <p
          className="
            mt-[14px]
            text-right
            font-[family-name:var(--font-body)]
            text-[11px]
            leading-[1.5]
            text-[#8a9386]
            max-[640px]:mt-[18px]
            max-[640px]:text-left
            max-[640px]:text-[10px]
          "
        >
          Representative imagery. Ask about recent local projects.
        </p>
      </div>
    </section>
  );
}

export default Gallery;
