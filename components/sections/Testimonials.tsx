"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Greenbolt was responsive, explained the work clearly, and treated our home with care. The finished installation looks excellent.",
    name: "Local Homeowner",
    location: "Spicewood area",
  },
  {
    quote:
      "From the first call through project completion, communication was straightforward and the electrical work was completed professionally.",
    name: "Residential Customer",
    location: "Highland Lakes area",
  },
  {
    quote:
      "A knowledgeable, dependable local electrician. We appreciated the practical recommendations and attention to detail.",
    name: "Property Owner",
    location: "West Austin area",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={`section-heading ${center ? "center" : ""} ${light ? "light" : ""}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
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
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-[112px] max-[640px]:py-[72px]">
      <div className="mx-auto w-[min(1180px,calc(100%-48px))] max-[640px]:w-[min(100%-32px,1180px)]">
        {/* Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="Customer Experience"
            title="What Our Customers Say"
            description="We're proud to earn trust through dependable service, clear communication, and quality work."
            center
          />
        </Reveal>

        {/* Testimonials */}
        <div className="mt-[60px] grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-2 max-[640px]:mt-[45px] max-[640px]:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.08}
              className="
                group
                flex
                min-h-[330px]
                flex-col
                rounded-[12px]
                border
                border-[#dfe5dc]
                bg-white
                p-[32px]
                transition-all
                duration-300
                hover:-translate-y-[5px]
                hover:border-[#cbd8c6]
                hover:shadow-[0_16px_35px_rgba(16,20,15,0.08)]
                max-[640px]:min-h-0
                max-[640px]:p-[28px]
              "
            >
              {/* Stars */}
              <div
                className="mb-[28px] flex items-center gap-[4px] text-[#68e236]"
                aria-label="5 out of 5 stars"
              >
                {[...Array(5)].map((_, star) => (
                  <Star
                    size={17}
                    fill="currentColor"
                    strokeWidth={1.5}
                    key={star}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 font-[family-name:var(--font-heading)] text-[21px] font-semibold leading-[1.3] text-[#10140f]">
                “{testimonial.quote}”
              </blockquote>

              {/* Reviewer */}
              <div className="mt-[32px] flex items-center gap-[13px] border-t border-[#dfe5dc] pt-[22px]">
                {/* Initial */}
                <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#effce9] font-[family-name:var(--font-heading)] text-[18px] font-bold text-[#43c91a]">
                  {testimonial.name.charAt(0)}
                </span>

                {/* Details */}
                <div className="min-w-0">
                  <strong className="block font-[family-name:var(--font-body)] text-[13px] font-bold leading-[1.3] text-[#10140f]">
                    {testimonial.name}
                  </strong>

                  <small className="mt-[3px] block font-[family-name:var(--font-body)] text-[11px] leading-[1.3] text-[#667064]">
                    {testimonial.location}
                  </small>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Placeholder note */}
        <p className="mt-[30px] text-center font-[family-name:var(--font-body)] text-[11px] italic leading-[1.5] text-[#8a9387]">
          Sample review layout — verified customer reviews can be added here.
        </p>
      </div>
    </section>
  );
}
