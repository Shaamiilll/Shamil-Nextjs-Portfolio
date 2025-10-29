import Image from "next/image";

export default function ForHer() {
  const images = [
    "/images/3.1.png",
    "/images/3.1.png",
    "/images/3.1.png",
    // "/images/pic2.jpg",
    // "/images/pic3.jpg",
    // add more paths...
  ];

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative w-full h-screen flex items-center justify-center snap-start"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
