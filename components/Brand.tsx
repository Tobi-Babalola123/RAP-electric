"use client";

type BrandProps = {
  inverse?: boolean;
};

export default function Brand({ inverse = false }: BrandProps) {
  return (
    <div className="group inline-flex min-w-0 items-center">
      <img
        src="/images/rapidlogo.webp"
        alt="Rapid Electric LLC"
        className="h-auto w-[70px] shrink-0 object-contain transition-transform duration-200 group-hover:-translate-y-0.5 sm:w-[85px] xl:w-[100px]"
      />
    </div>
  );
}
