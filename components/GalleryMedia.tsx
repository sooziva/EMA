import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

type Props = {
  item: GalleryItem;
};

export function GalleryMedia({ item }: Props) {
  if (item.type === "video") {
    return (
      <video
        className="gallery__video"
        src={item.src}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={`Class moment — ${item.label}`}
      />
    );
  }

  return (
    <Image
      src={item.src}
      alt={`Class moment — ${item.label}`}
      fill
      className="gallery__image"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  );
}
