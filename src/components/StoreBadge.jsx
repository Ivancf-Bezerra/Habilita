export default function StoreBadge({ src, alt, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-center
        h-14 md:h-16
        w-[190px] md:w-[210px]
        transition
        hover:scale-[1.03]
      "
    >
      <img
        src={src}
        alt={alt}
        className="
          h-full
          w-auto
          object-contain
          select-none
        "
        draggable="false"
      />
    </a>
  );
}
