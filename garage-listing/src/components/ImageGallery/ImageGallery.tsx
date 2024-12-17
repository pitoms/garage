import React from "react";

interface ImageGalleryProps {
  imageSources: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ imageSources }) => {
  if (!imageSources || imageSources.length === 0) {
    return <p>No images available</p>;
  }

  const largeImage = imageSources[0];
  const smallImages = imageSources.slice(1, 5);

  return (
    <div className="flex flex-nowrap max-h-[280px] md:max-h-[800px] max-w-[1440px] mx-auto">
      {/* Large Image */}
      <div className="w-full md:w-1/2 h-full">
        <div className="w-full h-full md:aspect-square">
          <img src={largeImage} alt="Large display" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Small Images Grid - Hidden on Mobile */}
      <div className="hidden md:grid w-full md:w-1/2 grid-cols-2">
        {smallImages.map((src, index) => (
          <div key={index} className="aspect-square">
            <img src={src} alt={`Small display ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
