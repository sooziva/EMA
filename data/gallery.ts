/**
 * Class moments gallery — edit this file to choose what appears on the site.
 *
 * 1. Put files in `public/` (e.g. `public/ekay/my-photo.jpg` or `public/videos/class.mp4`).
 * 2. Set `src` to the URL path from site root: `/ekay/my-photo.jpg` or `/videos/class.mp4`.
 * 3. Use `type: "image"` for photos (jpg, png, webp, etc.) or `type: "video"` for mp4/webm.
 * 4. Add or remove objects in `galleryItems` — order is display order (left→right, top→bottom).
 */

export type GalleryMediaType = "image" | "video";

export type GalleryItem = {
  /** Unique id for React keys (change if you duplicate rows) */
  id: string;
  type: GalleryMediaType;
  /** Path under `public/`, starting with / — e.g. `/ekay/IMG_9336.JPG` */
  src: string;
  /** Short caption shown on hover */
  label: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "image",
    src: "/ekay/IMG_9336.JPG",
    label: "In Session",
  },
  {
    id: "2",
    type: "image",
    src: "/ekay/IMG_8638.JPG",
    label: "Hands-on",
  },
  {
    id: "3",
    type: "image",
    src: "/ekay/IMG_9335.JPG",
    label: "Workshop",
  },
  {
    id: "4",
    type: "video",
    src: "/IMG_9260.mov",
    label: "Class highlight",
  },
  {
    id: "5",
    type: "image",
    src: "/ekay/DSC02285.jpg",
    label: "Learning",
  },
  {
    id: "6",
    type: "image",
    src: "/ekay/IMG_9338.JPG",
    label: "Creative Lab",
  },
];
