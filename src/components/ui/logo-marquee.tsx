import Image from "next/image";

export function LogoMarquee({
  logos,
}: {
  logos: { src: string; alt: string }[];
}) {
  const doubled = [...logos, ...logos];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-14 group-hover:[animation-play-state:paused]">
        {doubled.map((logo, i) => (
          <Image
            key={`${logo.src}-${i}`}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={60}
            className="h-12 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
}
